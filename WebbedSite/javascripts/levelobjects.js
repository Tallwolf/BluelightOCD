(function() {
    var WallTiles = [];
    var GooTiles = [];
        
    WallTile.prototype = window.GameObject.prototype;
    GooTile.prototype = window.GameObject.prototype;
    var WallSprite = window.LoadSprite("Wall_OnePiece.png");
    var GooSprite = window.LoadSprite("Goo.png");
    // GooSprites = [];
    // GooSprites[0]  = window.LoadSprite( "Goo_Wither0001.png" );
    // GooSprites[1]  = window.LoadSprite( "Goo_Wither0002.png" );
    // GooSprites[2]  = window.LoadSprite( "Goo_Wither0003.png" );
    // GooSprites[3]  = window.LoadSprite( "Goo_Wither0004.png" );
    // GooSprites[4]  = window.LoadSprite( "Goo_Wither0005.png" );
    // GooSprites[5]  = window.LoadSprite( "Goo_Wither0006.png" );
    // GooSprites[6]  = window.LoadSprite( "Goo_Wither0007.png" );
    // GooSprites[7]  = window.LoadSprite( "Goo_Wither0008.png" );
    // GooSprites[8]  = window.LoadSprite( "Goo_Wither0009.png" );
    // GooSprites[9]  = window.LoadSprite( "Goo_Wither0010.png" );
    // GooSprites[10] = window.LoadSprite( "Goo_Wither0011.png" );
    // GooSprites[11] = window.LoadSprite( "Goo_Wither0012.png" );
    // GooSprites[12] = window.LoadSprite( "Goo_Wither0013.png" );
    // GooSprites[13] = window.LoadSprite( "Goo_Wither0014.png" );
    // GooSprites[14] = window.LoadSprite( "Goo_Wither0015.png" );
    // GooSprites[15] = window.LoadSprite( "Goo_Wither0016.png" );
    // GooSprites[16] = window.LoadSprite( "Goo_Wither0017.png" );
    // GooSprites[17] = window.LoadSprite( "Goo_Wither0018.png" );
    // GooSprites[18] = window.LoadSprite( "Goo_Wither0019.png" );
    // GooSprites[19] = window.LoadSprite( "Goo_Wither0020.png" );
    // GooSprites[20] = window.LoadSprite( "Goo_Wither0021.png" );
    // GooSprites[21] = window.LoadSprite( "Goo_Wither0022.png" );
    // GooSprites[22] = window.LoadSprite( "Goo_Wither0023.png" );
    // GooSprites[23] = window.LoadSprite( "Goo_Wither0024.png" );
    // GooSprites[24] = window.LoadSprite( "Goo_Wither0025.png" );
    // GooSprites[25] = window.LoadSprite( "Goo_Wither0026.png" );
    // GooSprites[26] = window.LoadSprite( "Goo_Wither0027.png" );
    // GooSprites[27] = window.LoadSprite( "Goo_Wither0028.png" );
    // GooSprites[28] = window.LoadSprite( "Goo_Wither0029.png" );
    // GooSprites[29] = window.LoadSprite( "Goo_Wither0030.png" );
    // GooSprites[30] = window.LoadSprite( "Goo_Wither0031.png" );
    // GooSprites[31] = window.LoadSprite( "Goo_Wither0032.png" );
    // GooSprites[32] = window.LoadSprite( "Goo_Wither0033.png" );
    // GooSprites[33] = window.LoadSprite( "Goo_Wither0034.png" );
    // GooSprites[34] = window.LoadSprite( "Goo_Wither0035.png" );
    // GooSprites[35] = window.LoadSprite( "Goo_Wither0036.png" );
    // GooSprites[36] = window.LoadSprite( "Goo_Wither0037.png" );
    // GooSprites[37] = window.LoadSprite( "Goo_Wither0038.png" );
    // GooSprites[38] = window.LoadSprite( "Goo_Wither0039.png" );
    // GooSprites[39] = window.LoadSprite( "Goo_Wither0040.png" );
    // GooSprites[40] = window.LoadSprite( "Goo_Wither0041.png" );
    // GooSprites[41] = window.LoadSprite( "Goo_Wither0042.png" );
    // GooSprites[42] = window.LoadSprite( "Goo_Wither0043.png" );
    // GooSprites[43] = window.LoadSprite( "Goo_Wither0044.png" );
    // GooSprites[44] = window.LoadSprite( "Goo_Wither0045.png" );
    // GooSprites[45] = window.LoadSprite( "Goo_Wither0046.png" );
    // GooSprites[46] = window.LoadSprite( "Goo_Wither0047.png" );
    // GooSprites[47] = window.LoadSprite( "Goo_Wither0048.png" );
    // GooAnim = new Animation( GooSprites, window.PlayerWalkAnimSpeed );
    
    function WallTile( inX, inY ) {
            var size = new Vector2D( BoxSize, BoxSize );
            window.GameObject.call( this, WallSprite, inX, inY, size.x, size.y, true, window.ObjType.wall );
    };
    function GooTile( inX, inY ) {
            var size = new Vector2D( BoxSize, BoxSize );
            window.GameObject.call( this, GooSprite, inX, inY, size.x, size.y, true, window.ObjType.goo );
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
                    WallTiles.push( new WallTile(j*BoxSize, i*BoxSize) );
                }
                else if ( item == 2 )
                {
                    player.physBox.setPos(j*BoxSize + 1, i*BoxSize + 1);
                }
                else if ( item == 3 )
                {
                    if(GooTiles[j] == null)
                    {
                        GooTiles[j] = new Array();
                    }
                    GooTiles[j][i] = new GooTile(j*BoxSize, i*BoxSize);
                }
            }
        }
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
        this.encroaching = false;
        
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
        if(darkness.encroaching)
        {
            darkScale -= DarknessScaleRate;
            darkness.resize(darkScale);
        }
        return DarknessRate; //reset the timer to the start timer
    }
    
    window.WallMatDimensions = WallMatDimensions;
    window.WallMat = WallMat;
    window.WallTiles = WallTiles;
    window.GooTiles = GooTiles;
    window.GooTile = GooTile;
    window.InitWallTiles = InitWallTiles;
    window.Darkness = Darkness;
    window.EncroachDarkness = EncroachDarkness;
    
}()); // make an anonymous global function expression and immediately call it.