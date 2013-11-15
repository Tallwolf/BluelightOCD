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
        Init: function () {
            this.winnerCard = new ImageCard( CANVAS_WIDTH*0.5, CANVAS_HEIGHT*0.5, "WinScreen.png");
        },
        TickScene: function () {
            canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            this.winnerCard.draw();
            if(keydown.return)
            {
                alert("The End!");
            }
        },
    };
    
    var TutorialScene = {
        Init: function () {
            this.size = new Vector2D(800, 1800);
            this.timeStamp = 0;
            this.pausePos = 0;
            this.isPaused = true;
            this.offsety = this.size.y*0.5;
            this.tutorialCard = new ImageCard( CANVAS_WIDTH*0.5, this.offsety, "TutorialScreen.png");
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
        Init: function () {
            this.titleCard = new ImageCard( CANVAS_WIDTH*0.5, CANVAS_HEIGHT*0.5, "TitleScreen.png");
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