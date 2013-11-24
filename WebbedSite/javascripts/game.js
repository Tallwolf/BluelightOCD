(function() {

    var TheGame =
    {
        TheDarkness: new Darkness( CANVAS_WIDTH+8, CANVAS_HEIGHT+8 ),
        TheLight: new GuidingLight(0,0),
        LightOn: false,
        LightTimePassed: 0,
        LightMeasureTime: false,
        Ladder: null,
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
            
            window.game.LightOn = false;
            window.game.LightTimePassed = 0;
            window.game.LightMeasureTime = false;
            if(window.game.Ladder != null)
            {
                window.game.Ladder.destroy();
                window.game.Ladder = null;
            }
            this.SwapBGSound(window.backgroundNormSound);
        },
        
        SwapBGSound: function( bgSound ) {
            window.backgroundSound.StopSound();
            window.backgroundSound = bgSound
            window.backgroundSound.PlaySoundInterruptLoop();
        },
        
        BeginDarkness: function () {
            window.game.SwapBGSound(window.backgroundScarySound);
            window.game.TheDarkness.begin();
        },
        
        InitGame: function() {
            window.game.TheDarkness.reset();
            
            backgroundSound.PlaySoundInterruptLoop();
        
            InitWallTiles();
             
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

            if(this.LightMeasureTime && !this.LightOn)
            {
                this.LightTimePassed += 16;
                if(this.LightTimePassed > TimeTillLight)
                {
                    this.LightOn = true;
                    window.winSound.PlaySoundInterrupt();
                    window.game.SwapBGSound(window.backgroundNormSound);
                    //spawn randomly
                    var amountOut = window.LadderSquaresFromPlayer;
                    var count = 0;
                    var dir = Math.floor(Math.random()*4); //pick a dir - 1
                    while(this.Ladder == null)
                    {
                        count++;
                        if(count == 4)
                        {
                            amountOut++; //we probed all 4 directions, couldn't find a suitable location, gotta try further out
                            count = 0;
                        }
                        
                        dir += 1; //get the current direction
                
                        if(dir >= window.directions.dirmax)
                        {
                            dir = window.directions.none + 1;
                        }
                        
                        var dirVect = window.dirVects[dir];
                        
                        var checkX = player.gridPosition.x + dirVect.x*amountOut;
                        var checkY = player.gridPosition.y + dirVect.y*amountOut;
                        
                        if((checkX >= WallMatDimensions.x) || (checkX < 0))
                        {
                            continue;
                        }
                        
                        if((checkY >= WallMatDimensions.y) || (checkY < 0))
                        {
                            continue;
                        }
                        var node = WallMat[checkX][checkY];
                        
                        if(node != 1)
                        {
                            this.Ladder = new Ladder( checkX * BoxSize + BoxSize*0.5, checkY * BoxSize + BoxSize*0.5 );
                        }
                    }
                }
            }
            
            if(this.LightOn)
            {
                this.TheLight.update();
            }
            
            window.AnimationTimer.Tick();
            
            PhysicsUpdate();
        },
        
        SortFunc: function(a, b) {
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
        },
        
        DrawGame: function() {
          canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
          
          //It would be nice to find a faster way to do this, but for now:
          DrawList.sort(this.SortFunc);
            
          for( i = 0; i < DrawList.length; i++)
          {
            DrawList[i].draw();
          }
          
          this.TheDarkness.draw();
          
          if(this.LightOn)
          {
            this.TheLight.draw();
          }
          
          //PhysicsDraw();
        },
        
        WinGame: function() {
            //stop all sounds playing
            window.ritualEndSound.StopSound();
            window.gooWalkSound.StopSound();
            //window.backgroundSound.StopSound(); //let the ambient sound keep looping
            window.ritualDoingSound.StopSound();
            SwitchScene( window.WinScene );
        }
    };
    
    window.game = TheGame;

}()); // make an anonymous global function expression and immediately call it.