(function() {

    Player.prototype = window.GameObject.prototype;
    
    function Player() {
        this.combo = new window.CircleCombo();
        this.size = new Vector2D( BoxSize - 2, BoxSize - 2);
        this.ForwardSprites = [];
        window.LoadSpriteBatch(this.ForwardSprites, "Char_ForwardWalk (", ").png", 60);
      
        this.BackwardSprites = [];
        window.LoadSpriteBatch(this.BackwardSprites, "Char_BackWalk (", ").png", 60);
        
        this.LeftSprites = [];
        window.LoadSpriteBatch(this.LeftSprites, "Char_SideWalk_Left (", ").png", 61);
        
        this.RightSprites = [];
        window.LoadSpriteBatch(this.RightSprites, "Char_SideWalk_Right (", ").png", 61);
        
        this.ForwardAnim = new Animation( this.ForwardSprites, window.PlayerWalkAnimSpeed, window.PlayerWalkAnimFrameSkip, true );
        this.BackwardAnim = new Animation( this.BackwardSprites, window.PlayerWalkAnimSpeed, window.PlayerWalkAnimFrameSkip, true );
        this.LeftAnim = new Animation( this.LeftSprites, window.PlayerWalkAnimSpeed, window.PlayerWalkAnimFrameSkip, true );
        this.RightAnim = new Animation( this.RightSprites, window.PlayerWalkAnimSpeed, window.PlayerWalkAnimFrameSkip, true );
        window.GameObject.call( this, this.ForwardAnim, 0, 0, this.size.x, this.size.y, false, window.ObjType.player ); //player is placed by maze
        this.lastDir = directions.none;
        this.lastInput = new Array(5);
        
        this.isGooey = false;

        this.velocity = new Vector2D( 0, 0 );
        
        this.speed = window.PlayerSpeed;
        
        this.onCollide = function( objType ) {
                if(objType == window.ObjType.goo)
                {
                    if(!this.isGooey)
                    {
                        backgroundSound.PlaySoundInterruptLoop();
                        window.game.BeginDarkness();
                        this.isGooey = true;
                        
                    }
                }
                else if(objType == window.ObjType.ladder)
                {
                    //resolve player ladder collision
                    SwitchScene( window.WinScene );
                }
        };
        
        this.GetSpriteNeeded = function (moveDir) {
            var dirSprite;
            switch( moveDir )
            {
                case directions.up:
                    dirSprite = this.BackwardAnim;
                break;
                case directions.down:
                    dirSprite = this.ForwardAnim;
                break;
                case directions.left:
                    dirSprite = this.LeftAnim;
                break;
                case directions.right:
                    dirSprite = this.RightAnim;
                break;
                case directions.none:
                    dirSprite = this.sprite;
                break;
                default:
                    alert("invalid move direction");
                break;
            }
            return dirSprite;
        }
        
        this.checkInput = function () {
            var moveDir = this.lastDir;
            var anyKey = false;
            if(keydown.left) {
                if(this.lastInput[directions.left] == 0)
                {
                    moveDir = directions.left;
                    this.lastInput[directions.left] = 1;
                }
                anyKey = true;
            }
            else 
            {
                this.lastInput[directions.left] = 0;
            }
            
            if(keydown.right) {
                if(this.lastInput[directions.right] == 0)
                {
                    moveDir = directions.right;
                    this.lastInput[directions.right] = 1;
                }
                anyKey = true;
            }
            else
            {
                this.lastInput[directions.right] = 0;
            }
            
            if(keydown.up) {
                if(this.lastInput[directions.up] == 0)
                {
                    moveDir = directions.up;
                    this.lastInput[directions.up] = 1;
                }
                anyKey = true;
            }
            else
            {
                this.lastInput[directions.up] = 0;
            }
            
            if(keydown.down) {
                if(this.lastInput[directions.down] == 0)
                {
                    moveDir = directions.down;
                    this.lastInput[directions.down] = 1;
                }
                anyKey = true;
            }
            else
            {
                this.lastInput[directions.down] = 0;
            }
            
            if(!anyKey)
            {
                moveDir = directions.none;
                this.lastInput[directions.none] = 1;
            }
            else
            {
                this.lastInput[directions.none] = 0;
            }
            
            return moveDir;
        };
        
        this.move = function( moveDir ) {
            var didChangeDir = false;
            switch( moveDir )
            {
                case directions.up:
                    this.velocity.y = -this.speed;
                break;
                case directions.down:
                    this.velocity.y = this.speed;
                break;
                case directions.left:
                    this.velocity.x = -this.speed;
                break;
                case directions.right:
                    this.velocity.x = this.speed;
                break;
                case directions.none:
                break;
                default:
                    alert("invalid direction - tell a programmer");
                break;
            }
            
            if(moveDir == directions.none)
            {
                //set lastDir
                this.lastDir = directions.none;
                return didChangeDir;
            }
            
            if( this.lastDir != moveDir ) //if we don't have the current direction saved off as the last one
            {
                if( this.combo.AddMove(moveDir) )
                {
                    this.isGooey = false;
                    ritualEndSound.PlaySoundInterrupt();//"exhale");
                    window.game.RitualComplete();
                    window.gooWalkSound.StopSound();
                }
                didChangeDir = true;
            }
            
            if(this.isGooey)
            {
                var curX = this.gridPosition.x;
                var curY = this.gridPosition.y;
                if(WallMat[curX][curY] != 3)
                {
                    WallMat[curX][curY] = 3;
                    if(GooTiles[curX] == null)
                    {
                        GooTiles[curX] = new Array();
                    }
                    GooTiles[curX][curY] = new GooTile(curX*BoxSize + BoxSize*0.5, curY*BoxSize + BoxSize*0.5);
                }
            }
            
            //set lastDir
            this.lastDir = moveDir;
            
            return didChangeDir; //this is sort of an awkward thing to be returning considering the function's purpose
        };
        
        this.update = function() {
            var moveDir = this.checkInput();
            var dirChange = this.move(moveDir);
            
            if((moveDir==directions.none) && !this.sprite.isPaused)
            {
                this.sprite.pause();
                this.sprite.reset();
                if(this.isGooey)
                {
                    window.gooWalkSound.StopSound();
                }
            }
            else if(moveDir!=directions.none)
            {
                if(this.sprite.isPaused)
                {
                    if(this.isGooey)
                    {
                        window.gooWalkSound.PlaySoundInterruptLoop();
                    }
                    this.sprite.unpause();
                    this.sprite = this.GetSpriteNeeded(moveDir);
                    this.sprite.reset();
                }
                else if (dirChange) //if we simply changed direction, but did not stop moving
                {
                    this.sprite = this.GetSpriteNeeded(moveDir);
                    this.sprite.reset();
                }
            }
            
            this.physBox.setVel(this.velocity);
            
            this.physBox.getPos(this.position);
            this.gridPosition.x = Math.floor(this.position.x / BoxSize);
            this.gridPosition.y = Math.floor(this.position.y / BoxSize);
            
            //have the camera follow the player
            window.camera.setPosition(this.position);
            
            this.velocity.x = 0;
            this.velocity.y = 0;
            
        };
    };
    
    var ThePlayer = new Player();

    window.player = ThePlayer;
    
}()); // make an anonymous global function expression and immediately call it.