(function() {

    var TheGame =
    {
        //feelin' pretty lame about this dimension hard coding, need some sort of image loading callback that works on a subscriber pattern
        TheDarkness: new Darkness( 4800, 3600 ),
        DarkTimer: new window.Timer(),
        RitualComplete: function() {
            window.game.TheDarkness.reset();
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
            return a.position.y - b.position.y;
            });
            
          for( i = 0; i < DrawList.length; i++)
          {
            DrawList[i].draw();
          }
          
          this.TheDarkness.draw();
        }
    };
    
    window.game = TheGame;

}()); // make an anonymous global function expression and immediately call it.