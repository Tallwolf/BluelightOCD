(function() {
    var WallTiles = [];
    var GooTiles = [];
        
    WallTile.prototype = window.GameObject.prototype;
    GooTile.prototype = window.GameObject.prototype;
    var WallSprite = window.LoadSprite("Wall_OnePiece.png");
    var GooSprite = window.LoadSprite("Goo.png");
    GooSpawnSprites = [];
    GooSpawnSprites[0]  = window.LoadSprite( "Goo_Create_Purp0001.png" );
    GooSpawnSprites[1]  = window.LoadSprite( "Goo_Create_Purp0002.png" );
    GooSpawnSprites[2]  = window.LoadSprite( "Goo_Create_Purp0003.png" );
    GooSpawnSprites[3]  = window.LoadSprite( "Goo_Create_Purp0004.png" );
    GooSpawnSprites[4]  = window.LoadSprite( "Goo_Create_Purp0005.png" );
    GooSpawnSprites[5]  = window.LoadSprite( "Goo_Create_Purp0006.png" );
    GooSpawnSprites[6]  = window.LoadSprite( "Goo_Create_Purp0007.png" );
    GooSpawnSprites[7]  = window.LoadSprite( "Goo_Create_Purp0008.png" );
    GooSpawnSprites[8]  = window.LoadSprite( "Goo_Create_Purp0009.png" );
    GooSpawnSprites[9]  = window.LoadSprite( "Goo_Create_Purp0010.png" );
    GooSpawnSprites[10] = window.LoadSprite( "Goo_Create_Purp0011.png" );
    GooSpawnSprites[11] = window.LoadSprite( "Goo_Create_Purp0012.png" );
    GooSpawnSprites[12] = window.LoadSprite( "Goo_Create_Purp0013.png" );
    GooSpawnSprites[13] = window.LoadSprite( "Goo_Create_Purp0014.png" );
    GooSpawnSprites[14] = window.LoadSprite( "Goo_Create_Purp0015.png" );
    GooSpawnSprites[15] = window.LoadSprite( "Goo_Create_Purp0016.png" );
    GooSpawnSprites[16] = window.LoadSprite( "Goo_Create_Purp0017.png" );
    GooSpawnSprites[17] = window.LoadSprite( "Goo_Create_Purp0018.png" );
    GooSpawnSprites[18] = window.LoadSprite( "Goo_Create_Purp0019.png" );
    GooSpawnSprites[19] = window.LoadSprite( "Goo_Create_Purp0020.png" );
    GooSpawnSprites[20] = window.LoadSprite( "Goo_Create_Purp0021.png" );
    GooSpawnSprites[21] = window.LoadSprite( "Goo_Create_Purp0022.png" );
    GooSpawnSprites[22] = window.LoadSprite( "Goo_Create_Purp0023.png" );
    GooSpawnSprites[23] = window.LoadSprite( "Goo_Create_Purp0024.png" );
    GooSpawnSprites[24] = window.LoadSprite( "Goo_Create_Purp0025.png" );
    
    GooWitherSprites = [];
    GooWitherSprites[0]  = window.LoadSprite( "Goo_Wither_Purp0001.png" );
    GooWitherSprites[1]  = window.LoadSprite( "Goo_Wither_Purp0002.png" );
    GooWitherSprites[2]  = window.LoadSprite( "Goo_Wither_Purp0003.png" );
    GooWitherSprites[3]  = window.LoadSprite( "Goo_Wither_Purp0004.png" );
    GooWitherSprites[4]  = window.LoadSprite( "Goo_Wither_Purp0005.png" );
    GooWitherSprites[5]  = window.LoadSprite( "Goo_Wither_Purp0006.png" );
    GooWitherSprites[6]  = window.LoadSprite( "Goo_Wither_Purp0007.png" );
    GooWitherSprites[7]  = window.LoadSprite( "Goo_Wither_Purp0008.png" );
    GooWitherSprites[8]  = window.LoadSprite( "Goo_Wither_Purp0009.png" );
    GooWitherSprites[9]  = window.LoadSprite( "Goo_Wither_Purp0010.png" );
    GooWitherSprites[10] = window.LoadSprite( "Goo_Wither_Purp0011.png" );
    GooWitherSprites[11] = window.LoadSprite( "Goo_Wither_Purp0012.png" );
    GooWitherSprites[12] = window.LoadSprite( "Goo_Wither_Purp0013.png" );
    GooWitherSprites[13] = window.LoadSprite( "Goo_Wither_Purp0014.png" );
    GooWitherSprites[14] = window.LoadSprite( "Goo_Wither_Purp0015.png" );
    GooWitherSprites[15] = window.LoadSprite( "Goo_Wither_Purp0016.png" );
    GooWitherSprites[16] = window.LoadSprite( "Goo_Wither_Purp0017.png" );
    GooWitherSprites[17] = window.LoadSprite( "Goo_Wither_Purp0018.png" );
    GooWitherSprites[18] = window.LoadSprite( "Goo_Wither_Purp0019.png" );
    GooWitherSprites[19] = window.LoadSprite( "Goo_Wither_Purp0020.png" );
    GooWitherSprites[20] = window.LoadSprite( "Goo_Wither_Purp0021.png" );
    GooWitherSprites[21] = window.LoadSprite( "Goo_Wither_Purp0022.png" );
    GooWitherSprites[22] = window.LoadSprite( "Goo_Wither_Purp0023.png" );
    GooWitherSprites[23] = window.LoadSprite( "Goo_Wither_Purp0024.png" );
    GooWitherSprites[24] = window.LoadSprite( "Goo_Wither_Purp0025.png" );
    GooWitherSprites[25] = window.LoadSprite( "Goo_Wither_Purp0026.png" );
    GooWitherSprites[26] = window.LoadSprite( "Goo_Wither_Purp0027.png" );
    GooWitherSprites[27] = window.LoadSprite( "Goo_Wither_Purp0028.png" );
    GooWitherSprites[28] = window.LoadSprite( "Goo_Wither_Purp0029.png" );
    GooWitherSprites[29] = window.LoadSprite( "Goo_Wither_Purp0030.png" );
    GooWitherSprites[30] = window.LoadSprite( "Goo_Wither_Purp0031.png" );
    GooWitherSprites[31] = window.LoadSprite( "Goo_Wither_Purp0032.png" );
    GooWitherSprites[32] = window.LoadSprite( "Goo_Wither_Purp0033.png" );
    GooWitherSprites[33] = window.LoadSprite( "Goo_Wither_Purp0034.png" );
    GooWitherSprites[34] = window.LoadSprite( "Goo_Wither_Purp0035.png" );
    GooWitherSprites[35] = window.LoadSprite( "Goo_Wither_Purp0036.png" );
    GooWitherSprites[36] = window.LoadSprite( "Goo_Wither_Purp0037.png" );
    GooWitherSprites[37] = window.LoadSprite( "Goo_Wither_Purp0038.png" );
    GooWitherSprites[38] = window.LoadSprite( "Goo_Wither_Purp0039.png" );
    GooWitherSprites[39] = window.LoadSprite( "Goo_Wither_Purp0040.png" );
    GooWitherSprites[40] = window.LoadSprite( "Goo_Wither_Purp0041.png" );
    GooWitherSprites[41] = window.LoadSprite( "Goo_Wither_Purp0042.png" );
    GooWitherSprites[42] = window.LoadSprite( "Goo_Wither_Purp0043.png" );
    GooWitherSprites[43] = window.LoadSprite( "Goo_Wither_Purp0044.png" );
    GooWitherSprites[44] = window.LoadSprite( "Goo_Wither_Purp0045.png" );
    GooWitherSprites[45] = window.LoadSprite( "Goo_Wither_Purp0046.png" );
    GooWitherSprites[46] = window.LoadSprite( "Goo_Wither_Purp0047.png" );
    GooWitherSprites[47] = window.LoadSprite( "Goo_Wither_Purp0048.png" );
    
    GooWitherAnims = [];
    GooWitherAnims[0] = new Animation( GooWitherSprites, window.GooWitherAnimSpeed, window.GooWitherAnimFrameSkip, true );
    GooWitherAnims[1] = new Animation( GooWitherSprites, window.GooWitherAnimSpeed, window.GooWitherAnimFrameSkip, true );
    GooWitherAnims[1].curSprite = 10;
    GooWitherAnims[2] = new Animation( GooWitherSprites, window.GooWitherAnimSpeed, window.GooWitherAnimFrameSkip, true );
    GooWitherAnims[2].curSprite = 20;
    GooWitherAnims[3] = new Animation( GooWitherSprites, window.GooWitherAnimSpeed, window.GooWitherAnimFrameSkip, true );
    GooWitherAnims[3].curSprite = 30;
    
    function WallTile( inX, inY ) {
            var size = new Vector2D( BoxSize, BoxSize );
            window.GameObject.call( this, WallSprite, inX, inY, size.x, size.y, true, window.ObjType.wall );
    };
    function pickRandAnim (goo) {
                goo.sprite = GooWitherAnims[Math.floor(Math.random()*4)];
            };
    function GooTile( inX, inY ) {
            var size = new Vector2D( BoxSize - 2, BoxSize - 2 );
            
            var aCallBack = new AnimCallback(this, pickRandAnim);
            var GooAnim = new Animation( GooSpawnSprites, window.GooSpawnAnimSpeed, window.GooSpawnAnimFrameSkip, false, aCallBack ); //make a new one every time
            window.GameObject.call( this, GooAnim, inX, inY, size.x, size.y, true, window.ObjType.goo );
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
    
    function Darkness( inW, inH ) {
        this.startSize = new Vector2D( inW, inH );
        this.size = new Vector2D( inW, inH );
        var sprite = window.LoadSprite("shadow.png");
        var noListflag = true;
        window.ScreenObject.call( this, sprite, (CANVAS_WIDTH)*0.5, (CANVAS_HEIGHT)*0.5, noListflag);
        this.reset = function () {
            darkScale = 1.0;
            this.resize(1.0);
        };
        this.encroaching = false;
        
        this.resize = function ( inScale ) {
            //this.position.x = -(inScale*this.startSize.x - CANVAS_WIDTH)*0.5;
            //this.position.y = -(inScale*this.startSize.y - CANVAS_HEIGHT)*0.5;
            this.size.x = inScale*this.startSize.x;
            this.size.y = inScale*this.startSize.y;
            
            //this is pretty inefficient, we should stop the callback and have
            //a more accurate way of checking this
            if(this.size.x < CANVAS_WIDTH)
            {
                //this.position.x = 0;
                //this.position.y = 0;
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