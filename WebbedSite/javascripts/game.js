(function() {

    var WallTiles = [ new WallTile(140, 150), new WallTile(172, 150), new WallTile(204, 150),
                      new WallTile(300, 150), new WallTile(332, 150), new WallTile(364, 150),
                      new WallTile(172, 214), new WallTile(204, 214), new WallTile(236, 214), 
                      new WallTile(268, 214), new WallTile(300, 214), new WallTile(332, 214), 
                      new WallTile(364, 214), new WallTile(140, 214), new WallTile(140, 182) ];
        
    WallTile.prototype = window.GameObject.prototype;
    
    function WallTile( inX, inY ) {
            var size = new Vector2D( 32, 32 );
            window.GameObject.call( this, "wall.png", inX, inY, size.x, size.y, true );
    };
    
    Darkness.prototype = window.ScreenObject.prototype;
    
    function Darkness( inW, inH ) {
        this.startSize = new Vector2D( inW, inH );
        this.size = new Vector2D( inW, inH );
        
        window.ScreenObject.call( this, "shadow.png", -(this.startSize.x - CANVAS_WIDTH)*0.5, -(this.startSize.y - CANVAS_HEIGHT)*0.5);
        
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
        
            //hacky tile setup
            var j = WallTiles.length; //if there's anything in there, don't overwrite it
            var i = 0;
            var TileWH = 32; //where should this come from?
            
            var right = (CANVAS_WIDTH - (CANVAS_WIDTH % TileWH));
            var bottom = (CANVAS_HEIGHT - (CANVAS_HEIGHT % TileWH));
            
            var numright = (Math.round(right) / TileWH);
            var numbottom = (Math.round(bottom) / TileWH);
            
            for( i = 0; i < numright; i++)
            {
                WallTiles[i+j] = new WallTile(TileWH*i, -TileWH);
            }
            
            j += numright;
            
            for( i = 0; i < numright; i++)
            {
                WallTiles[i+j] = new WallTile(TileWH*i, bottom);
            }
            
            j += numright;
            
            //vertical
            for( i = 0; i < numbottom + 2; i++)
            {
                WallTiles[i+j] = new WallTile(-TileWH, TileWH*i - TileWH);
            }
            
            j += numbottom + 2;
            
            for( i = 0; i < numbottom + 2; i++)
            {
                WallTiles[i+j] = new WallTile(right, TileWH*i - TileWH);
            }
            
            this.DarkTimer.AddCallback( DarknessRate, EncroachDarkness, this.TheDarkness );
             
            PhysicsInit();
        },
        
        TickGame: function() {
            this.UpdateGame();
            this.DrawGame();    
        },
        
        UpdateGame: function() {
            
            player.update();
            
            this.DarkTimer.Tick();
            
            PhysicsUpdate();
        },
        
        DrawGame: function() {
          canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
          PhysicsDraw();
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