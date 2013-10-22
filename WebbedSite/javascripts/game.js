(function() {

    var TheGame =
    {
        //feelin' pretty lame about this dimension hard coding, need some sort of image loading callback that works on a subscriber pattern
        TheDarkness: new Darkness( 4800, 3600 ),
        DarkTimer: new window.Timer(),
        RitualComplete: function() {
            //make square under player not gooey
            var playX = player.gridPosition.x;
            var playY = player.gridPosition.y;
            var curX = 0;
            var curY = 0;
            for( var i = -window.gooClearRadius; i <= window.gooClearRadius; ++i)
            {
                curY = (playY + i);
                for( var j = -window.gooClearRadius; j <= window.gooClearRadius; ++j)
                {
                    curX = playX + j;
                    if(WallMat[curX][curY] == 3)
                    {
                        WallMat[curX][curY] = 0;
                        GooTiles[curX][curY].destroy();
                        GooTiles[curX][curY] = undefined;  
                    }
                }
                curY += WallMatDimensions.x;
            }
            window.game.TheDarkness.reset();
            window.game.TheDarkness.encroaching = false;
        },
        BeginDarkness: function () {
            window.game.TheDarkness.encroaching = true;
        },
        
        InitGame: function() {
        
            InitWallTiles();
            
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
          
          //It would be nice to find a faster way to do this, but for now:
          DrawList.sort(function(a, b) {
            var val = (a.gridPosition.y - b.gridPosition.y);
            if(val == 0)
            {
                if(a.physBox.body.userDat.objType == window.ObjType.player) //this is really bad practice, we need a better way
                {
                    val = 1;
                }
                else
                {
                    val = -1;
                }
            }
            return val;
            });
            
          for( i = 0; i < DrawList.length; i++)
          {
            DrawList[i].draw();
          }
          
          this.TheDarkness.draw();
          
          //PhysicsDraw();
        }
    };
    
    window.game = TheGame;

}()); // make an anonymous global function expression and immediately call it.