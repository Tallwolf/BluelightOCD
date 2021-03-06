(function() {
    var WallTiles = [];
    var GooTiles = [];
        
    WallTile.prototype = window.GameObject.prototype;
    GooTile.prototype = window.GameObject.prototype;
    var WallSprite = window.LoadSprite("Wall_OnePiece.png");
    var LadderSprite = window.LoadSprite("Ladder.png");

    var GooSpawnSprites = window.LoadSpriteBatch( "Goo_Spawn (", ").png", 61);

    var GooIdleSprites = window.LoadSpriteBatch( "Goo_Idle (", ").png", 60);
    
    GooIdleAnims = [];
    GooIdleAnims[0] = new Animation( GooIdleSprites, window.GooIdleAnimSpeed, window.GooIdleAnimFrameSkip, true );
    GooIdleAnims[1] = new Animation( GooIdleSprites, window.GooIdleAnimSpeed, window.GooIdleAnimFrameSkip, true );
    GooIdleAnims[1].curSprite = 10;
    GooIdleAnims[2] = new Animation( GooIdleSprites, window.GooIdleAnimSpeed, window.GooIdleAnimFrameSkip, true );
    GooIdleAnims[2].curSprite = 20;
    GooIdleAnims[3] = new Animation( GooIdleSprites, window.GooIdleAnimSpeed, window.GooIdleAnimFrameSkip, true );
    GooIdleAnims[3].curSprite = 30;
    
    var DarknessSprites = window.LoadSpriteBatch("Darkness (", ").png", 245);
    
    function WallTile( inX, inY ) {
            var size = new Vector2D( BoxSize, BoxSize );
            window.GameObject.call( this, WallSprite, inX, inY, size.x, size.y, true, window.ObjType.wall );
    };
    function pickRandAnim (goo) {
                goo.sprite = GooIdleAnims[Math.floor(Math.random()*4)];
            };
    function GooTile( inX, inY ) {
            var size = new Vector2D( BoxSize - 2, BoxSize - 2 );
            
            var aCallBack = new AnimCallback(this, pickRandAnim);
            var GooAnim = new Animation( GooSpawnSprites, window.GooSpawnAnimSpeed, window.GooSpawnAnimFrameSkip, false, aCallBack ); //make a new one every time
            window.GameObject.call( this, GooAnim, inX, inY, size.x, size.y, true, window.ObjType.goo );
    };
    
    function Ladder( inX, inY ) {
            var size = new Vector2D( BoxSize, BoxSize);
            window.GameObject.call( this, LadderSprite, inX, inY, size.x, size.y, true, window.ObjType.ladder );
    };
    
    function InitWallTiles() {
    
        GenerateMaze();
        
        //set up map from matrix
        for( var i = 0; i < WallMatDimensions.y; i++)
        {
            for( var j = 0; j < WallMatDimensions.x; j++)
            {
                var item = WallMat[j][i];
                if( item == 1 )
                {
                    WallTiles.push( new WallTile(j*BoxSize + BoxSize*0.5, i*BoxSize + BoxSize*0.5) );
                }
                else if ( item == 2 )
                {
                    player.physBox.setPos(j*BoxSize + BoxSize*0.5, i*BoxSize + BoxSize*0.5);
                }
                else if ( item == 3 )
                {
                    if(GooTiles[j] == null)
                    {
                        GooTiles[j] = new Array();
                    }
                    GooTiles[j][i] = new GooTile(j*BoxSize + BoxSize*0.5, i*BoxSize+ BoxSize*0.5);
                }
            }
        }
    };
    
    
    Darkness.prototype = window.ScreenObject.prototype;
    
    function StartLightMeasure ( darkness ) {
        window.game.LightMeasureTime = true;
    };
    
    function Darkness( inW, inH ) {
        this.startSize = new Vector2D( inW, inH );
        this.size = new Vector2D( inW, inH );
        //var anim = DarknessAnim;//window.LoadSprite("shadow.png");
        var noListflag = true;
        var aCallBack = new AnimCallback(this, StartLightMeasure);
        var DarknessAnim = new Animation( DarknessSprites, window.DarknessAnimSpeed, window.DarknessAnimFrameSkip, false, aCallBack );
        window.ScreenObject.call( this, DarknessAnim, (CANVAS_WIDTH)*0.5, (CANVAS_HEIGHT)*0.5, noListflag);
        this.reset = function () {
            this.sprite.pause();
            this.sprite.reset();
        };
        this.begin = function () {
            this.sprite.play();
        };
        
        this.draw = function( ) {
            this.sprite.draw(canvas, this.position, this.size ); 
        };
    };
    
    GuidingLight.prototype = window.ScreenObject.prototype;
    
    function GuidingLight( inX, inY ) {
        this.size = new Vector2D( 500, 500 );
        var sprite = window.LoadSprite("WhiteLight.png");
        var noListflag = true;
        window.ScreenObject.call( this, sprite, inX, inY, noListflag);
        
        this.draw = function( ) {
            this.sprite.draw(canvas, this.position, this.size ); 
        };
        
        this.update = function( ) {
            if(game.Ladder == null)
            {
                console.log( "The Ladder is missing!" );
            }
            var result = new Vector2D(game.Ladder.position.x - player.position.x, game.Ladder.position.y - player.position.y); //points from player to exit
            var wind = new Vector2D( -CANVAS_WIDTH*0.5, -CANVAS_HEIGHT*0.5 ); //from center to top left
            if( ( Math.abs(result.x) < Math.abs(wind.x) ) && ( Math.abs(result.y) < Math.abs(wind.y) ) )
            {
                this.position.x = result.x + CANVAS_WIDTH*0.5;  
                this.position.y = result.y + CANVAS_HEIGHT*0.5;
                return;
            }
            result.normalize();
            wind.normalize();
           // console.log("Result before: " + result.x + "," + result.y);
            
            if( Math.abs(result.x) > Math.abs(wind.x) ) //if our x is greater than wind's we hug one of the sides
            {
                if( result.x > 0 ) //figure out which side we want
                {
                    result.x = CANVAS_WIDTH;
                }
                else
                {
                    result.x = 0;
                }
                var len = Math.abs(wind.y) * 2;
                result.y = CANVAS_HEIGHT * ((result.y + Math.abs(wind.y)) / len);
            }
            else if ( Math.abs(result.y) >= Math.abs(wind.y) ) //if our y is greater than wind's we hug the top or bottom
            {
                if( result.y > 0) //top or bottom?
                {
                    result.y = CANVAS_HEIGHT;
                }
                else
                {
                    result.y = 0;
                }
                var len = Math.abs(wind.x) * 2;
                result.x = CANVAS_WIDTH * ((result.x + Math.abs(wind.x)) / len);
            }
            else
            {
                console.log("Can't point to ladder");
            }
            this.position.x = result.x;
            this.position.y = result.y;
            
        };
    }
    
    window.WallMatDimensions = WallMatDimensions;
    window.WallMat = WallMat;
    window.WallTiles = WallTiles;
    window.GooTiles = GooTiles;
    window.GooTile = GooTile;
    window.InitWallTiles = InitWallTiles;
    window.Darkness = Darkness;
    window.GuidingLight = GuidingLight;
    window.Ladder = Ladder;
    
}()); // make an anonymous global function expression and immediately call it.