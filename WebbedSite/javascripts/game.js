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

    var TheGame =
    {
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
        
            PhysicsInit();
        },
        
        TickGame: function() {
            this.UpdateGame();
            this.DrawGame();        
        },
        
        UpdateGame: function() {
        
            if(keydown.left) {
                player.move(player.left);
            }
            
            if(keydown.right) {
                player.move(player.right);
            }
            
            if(keydown.up) {
                player.move(player.up);
            }
            
            if(keydown.down) {
                player.move(player.down);
            }
            
            player.update();
            
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
        }
    };
    
    window.game = TheGame;

}()); // make an anonymous global function expression and immediately call it.