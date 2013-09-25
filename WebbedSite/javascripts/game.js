(function() {

    var WallMatDimensions = new Vector2D(30, 30); //make sure these match up with the matrix
                    //1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
    var WallMat   = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, //1
                      1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, //2
                      1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, //3
                      1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, //4
                      1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, //5
                      1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, //6
                      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, //7
                      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, //8
                      1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, //9
                      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, //10
                      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, //11
                      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, //12
                      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, //13
                      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, //14
                      1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, //15
                      1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, //16
                      1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, //17
                      1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, //18
                      1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, //19
                      1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, //20
                      1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, //21
                      1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, //22
                      1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, //23
                      1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, //24
                      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, //25
                      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, //26
                      1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, //27
                      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, //28
                      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, //29
                      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]//30
                      //0 = empty, 1 = wall, 2 = player
    var WallTiles = [];
        
    WallTile.prototype = window.GameObject.prototype;
    
    function WallTile( inX, inY ) {
            var size = new Vector2D( 32, 32 );
            var sprite = window.LoadSprite("wall.png");
            window.GameObject.call( this, sprite, inX, inY, size.x, size.y, true );
    };
    
    Darkness.prototype = window.ScreenObject.prototype;
    
    function Darkness( inW, inH ) {
        this.startSize = new Vector2D( inW, inH );
        this.size = new Vector2D( inW, inH );
        var sprite = window.LoadSprite("shadow.png");
        window.ScreenObject.call( this, sprite, -(this.startSize.x - CANVAS_WIDTH)*0.5, -(this.startSize.y - CANVAS_HEIGHT)*0.5);
        
        this.reset = function () {
            darkScale = 1.0;
            this.resize(1.0);
        };
        
        this.resize = function ( inScale ) {
            this.position.x = -(inScale*this.startSize.x - CANVAS_WIDTH)*0.5;
            this.position.y = -(inScale*this.startSize.y - CANVAS_HEIGHT)*0.5;
            this.size.x = inScale*this.startSize.x;
            this.size.y = inScale*this.startSize.y;
            
            //this is pretty inefficient, we should stop the callback and have
            //a more accurate way of checking this
            if(this.size.x < CANVAS_WIDTH)
            {
                this.position.x = 0;
                this.position.y = 0;
                this.size.x = CANVAS_WIDTH;
                this.size.y = CANVAS_HEIGHT;
            }
            
        };
        
        this.draw = function( ) {
            this.sprite.draw(canvas, this.position, this.size ); 
        };
    };
        
    var darkScale = 1.0;
    //this is a callback for the timer, not sure where to put it yet, so dumping it here for now
    function EncroachDarkness( darkness ) {
        darkScale -= DarknessScaleRate;
        darkness.resize(darkScale);
        return DarknessRate; //reset the timer to the start timer
    }

    var TheGame =
    {
        //feelin' pretty lame about this dimension hard coding, need some sort of image loading callback that works on a subscriber pattern
        TheDarkness: new Darkness( 4800, 3600 ),
        DarkTimer: new window.Timer(),
        RitualComplete: function() {
            window.game.TheDarkness.reset();
        },
        
        InitGame: function() {
        
            //set up map from matrix
            for( var i = 0; i < WallMatDimensions.x; ++i)
            {
                for( var j = 0; j < WallMatDimensions.y; ++j)
                {
                    if( WallMat[i + j*WallMatDimensions.x] == 1 )
                    {
                        WallTiles.push( new WallTile(i*32, j*32) );
                    }
                    else if ( WallMat[i + j*WallMatDimensions.x] == 2 )
                    {
                        player.physBox.setPos(i*32 + 1, j*32 + 1);
                    }
                }
            }
            
            this.DarkTimer.AddCallback( DarknessRate, EncroachDarkness, this.TheDarkness );
             
            PhysicsInit();
        },
        
        TickGame: function() {
            if(0) return; //this is a debug toggle to turn off the game loop when something is borked.
                          //it prevents me from being inundated by an insurmountable wave of "x is not defined!" messages
                          //I got tried of re-writing it, so it's staying here but turned off
            this.UpdateGame();
            this.DrawGame();    
        },
        
        UpdateGame: function() {
            
            player.update();
            
            this.DarkTimer.Tick();
            
            window.AnimationTimer.Tick();
            
            PhysicsUpdate();
        },
        
        DrawGame: function() {
          canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
          //PhysicsDraw();
          player.draw();

          for( i = 0; i < WallTiles.length; i++)
          {
            WallTiles[i].draw();
          }
          
          this.TheDarkness.draw();
        }
    };
    
    window.game = TheGame;

}()); // make an anonymous global function expression and immediately call it.