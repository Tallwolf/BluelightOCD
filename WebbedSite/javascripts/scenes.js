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
        this.size = new Vector2D( 800, 600 );
        var sprite = window.LoadSprite(imageFile);
        var noListflag = true;
        window.ScreenObject.call( this, sprite, inX, inY, noListflag);
        
        this.draw = function( ) {
            this.sprite.draw(canvas, this.position, this.size ); 
        };
        };
    
    var WinScene = {
        Init: function () {
            this.winner = new ImageCard( CANVAS_WIDTH*0.5, CANVAS_HEIGHT*0.5, "WinScreen.png");
        },
        TickScene: function () {
            canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            this.winner.draw();
            if(keydown.return)
            {
                alert("The End!");
            }
        },
    };
    
    var TitleScene = {
        Init: function () {
            //TODO
        },
        TickScene: function () {
            //TODO
        },
    };
    
    var TutorialScene = {
        Init: function () {
            //TODO
        },
        TickScene: function () {
            //TODO
        },
    };

    window.GameScene = GameScene;
    window.WinScene = WinScene;
    window.SwitchScene = SwitchScene;

}()); // make an anonymous global function expression and immediately call it.