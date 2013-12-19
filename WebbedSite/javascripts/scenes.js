(function() {

    function SwitchScene ( scene ) {
        window.curScene = scene;
        window.curScene.Init();
    }

    //Duck typing for now
    
    var GameScene = {
        Init: function () {
            game.InitGame();
        },
        TickScene: function () {
            game.TickGame();
        },
    };
    
    ImageCard.prototype = window.ScreenObject.prototype;
    
    function ImageCard( inX, inY, imageFile ) {
        var sprite = window.LoadSprite(imageFile);
        var noListflag = true;
        window.ScreenObject.call( this, sprite, inX, inY, noListflag);
        
        this.draw = function( ) {
            this.sprite.draw(canvas, this.position ); 
        };
    };
    
    var WinScene = {
        winnerCard: new ImageCard( CANVAS_WIDTH*0.5, CANVAS_HEIGHT*0.5, "WinScreen.png"),
        Init: function () {
            this.timeStamp = 0;
            //winSound.PlaySoundInterruptLoop(); //ambient noise is still playing from previous scene
        },
        TickScene: function () {
            canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            this.winnerCard.draw();
            this.timeStamp += 16; //ms for 60 FPS
            
            if(this.timeStamp > (WinScreenTimeout - winCredFadeTime))
            {
                myCanvas.globalAlpha = (WinScreenTimeout - this.timeStamp) / winCredFadeTime;
            }
            
            if(this.timeStamp > WinScreenTimeout)
            {
                SwitchScene(CreditsScene);
            }
        },
    };
    
    var CreditsScene = {
        creditsCard: new ImageCard( CANVAS_WIDTH*0.5, CANVAS_HEIGHT*0.5, "CreditsScreen1.png"),
        Init: function () {
            this.timeStamp = 0;
        },
        TickScene: function () {
            canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            this.creditsCard.draw();
            
            this.timeStamp += 16; //ms for 60 FPS
            
            if(this.timeStamp < winCredFadeTime)
            {
                myCanvas.globalAlpha = (this.timeStamp) / winCredFadeTime;
            }
            else
            {
                myCanvas.globalAlpha = 1;
            }
            
            if(this.timeStamp > (CreditsScreenTimeout - winCredFadeTime))
            {
                myCanvas.globalAlpha = (CreditsScreenTimeout - this.timeStamp) / winCredFadeTime;
            }
            
            if(this.timeStamp > CreditsScreenTimeout)
            {
                SwitchScene(CreditsScene2);
            }
        },
    };
    
    var CreditsScene2 = {
        creditsCard: new ImageCard( CANVAS_WIDTH*0.5, CANVAS_HEIGHT*0.5, "CreditsScreen2.png"),
        Init: function () {
            this.timeStamp = 0;
        },
        TickScene: function () {
            canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            this.creditsCard.draw();
            
            this.timeStamp += 16; //ms for 60 FPS
            
            if(this.timeStamp < winCredFadeTime)
            {
                myCanvas.globalAlpha = (this.timeStamp) / winCredFadeTime;
            }
            else
            {
                myCanvas.globalAlpha = 1;
            }
        },
    };
    
    var Tutorial2Scene = {
        tutorialCard: new ImageCard( CANVAS_WIDTH*0.5, CANVAS_HEIGHT*0.5, "InstructionsScreen.png"),
        Init: function () {
            this.timeStamp = 0;
        },
        TickScene: function () {
            canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            this.tutorialCard.draw();
            
            this.timeStamp += 16; //ms for 60 FPS
            if((this.timeStamp > window.Tutorial2PauseTime) || keydown.return) 
            {
                SwitchScene(GameScene);
            }
        },
    };
    
    var TutorialScene = {
        tutorialCard: new ImageCard( CANVAS_WIDTH*0.5, 1500, "TutorialScreen.png"),
        Init: function () {
            this.size = new Vector2D(800, 3000);
            this.timeStamp = 0;
            this.pausePos = 0;
            this.isPaused = true;
            this.offsety = this.size.y*0.5;
        },
        TickScene: function () {
            canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            this.tutorialCard.draw();
            
            if(this.isPaused)
            {
                this.timeStamp += 16; //ms for 60 FPS
                if(this.timeStamp > window.TutorialPauseTime)
                {
                    this.isPaused = false;
                    this.timeStamp = 0;
                    if(this.pausePos == TutPauseSpaces.length)
                    {
                        SwitchScene(Tutorial2Scene);
                    }
                }
            }
            else
            {
                this.tutorialCard.position.y -= window.TutorialScrollRate;
                if( (this.tutorialCard.position.y - this.offsety) < -TutPauseSpaces[this.pausePos])
                {
                    this.isPaused = true;
                    this.pausePos++;
                    
                }
            }
            
            //in case we want manual control later, leaving my debug stuff here
            
            //if(keydown.down)
            //{
            //    this.tutorialCard.position.y -= window.TutorialScrollRate;
            //}
            //else if (keydown.up)
            //{
            //    this.tutorialCard.position.y += window.TutorialScrollRate;
            //}
            //
            //if(this.tutorialCard.position.y > this.size.y*0.5)
            //{
            //    this.tutorialCard.position.y = this.size.y*0.5;
            //}
            //else if (this.tutorialCard.position.y < (CANVAS_HEIGHT - this.size.y*0.5))
            //{
            //    this.tutorialCard.position.y = (CANVAS_HEIGHT - this.size.y*0.5);
            //}
            //
            //if(keydown.return && (this.tutorialCard.position.y == (CANVAS_HEIGHT - this.size.y*0.5)) ) 
            //{
            //    SwitchScene(GameScene);
            //}
            
        },
    };
    
    var TitleScene = {
        titleCard: new ImageCard( CANVAS_WIDTH*0.5, CANVAS_HEIGHT*0.5, "TitleScreen.png"),
        Init: function () {
            
        },
        TickScene: function () {
            canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            this.titleCard.draw();
            if(keydown.return)
            {
                SwitchScene(TutorialScene);
            }
        },
    };

    window.GameScene = GameScene;
    window.WinScene = WinScene;
    window.TitleScene = TitleScene;
    window.TutorialScene = TutorialScene;
    window.SwitchScene = SwitchScene;

}()); // make an anonymous global function expression and immediately call it.