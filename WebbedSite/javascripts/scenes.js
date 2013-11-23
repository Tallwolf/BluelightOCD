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
            winSound.PlaySoundInterruptLoop();
        },
        TickScene: function () {
            canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            this.winnerCard.draw();
            this.timeStamp += 16; //ms for 60 FPS
            
            if(this.timeStamp > WinScreenTimeout)
            {
                SwitchScene(CreditsScene);
            }
        },
    };
    
    var CreditsScene = {
        creditsCard: new ImageCard( CANVAS_WIDTH*0.5, CANVAS_HEIGHT*0.5, "CreditsScreen.png"),
        Init: function () {
            
        },
        TickScene: function () {
            canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            this.creditsCard.draw();
        },
    };
    
    var TutorialScene = {
        tutorialCard: new ImageCard( CANVAS_WIDTH*0.5, 900, "TutorialScreen.png"),
        Init: function () {
            this.size = new Vector2D(800, 1800);
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
                        SwitchScene(GameScene);
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