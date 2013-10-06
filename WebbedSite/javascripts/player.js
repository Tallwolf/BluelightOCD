(function() {

    var PlayerStart = new Vector2D(50,270);
    
    Player.prototype = window.GameObject.prototype;
    
    //arbitrary numbers, basically an enum
    //we need a better way to do this, yuck
    function DirEnum(){
        this.none = 0;
        this.up = 1;
        this.down = 2;
        this.left = 3;
        this.right = 4;
    };
    directions = new DirEnum();
    
    function CircleCombo() {
        this.clockwise = 1;
        this.counterclockwise = 2;
        
        this.curRot = this.clockwise;
        this.lastMoveDir = directions.none;
        this.count = 0;
        
        this.GetDirNeeded = function () {
            var dirNeeded = 0;
            switch( this.lastMoveDir )
            {
                case directions.up:
                    if(this.curRot == this.clockwise)
                    {
                        dirNeeded = directions.right;
                    }
                    else
                    {
                        dirNeeded = directions.left;
                    }
                break;
                case directions.down:
                    if(this.curRot == this.clockwise)
                    {
                        dirNeeded = directions.left;
                    }
                    else
                    {
                        dirNeeded = directions.right;
                    }
                break;
                case directions.left:
                    if(this.curRot == this.clockwise)
                    {
                        dirNeeded = directions.up;
                    }
                    else
                    {
                        dirNeeded = directions.down;
                    }
                break;
                case directions.right:
                    if(this.curRot == this.clockwise)
                    {
                        dirNeeded = directions.down;
                    }
                    else
                    {
                        dirNeeded = directions.up;
                    }
                break;
                default:
                    alert("invalid move direction");
                break;
            }
            
            return dirNeeded;
        }
        
        this.AddMove = function (moveDir) {
            if(this.lastMoveDir == moveDir)
            {
                return false; //nothing has changed, leave
            }
        
            if(this.count == 0)
            {
                this.lastMoveDir = moveDir;
                this.count++;
                return false; //early out, first move, nothing to do here
            }
            
            var dirNeeded = this.GetDirNeeded();
            
            if(moveDir == dirNeeded)
            {
                this.count++; //we went the right way, add one to the count
            }
            else if( (moveDir == directions.right && this.lastMoveDir == directions.left) ||  //if we did a 180, set the count to 1
                     (moveDir == directions.down && this.lastMoveDir == directions.up) ||
                     (moveDir == directions.left && this.lastMoveDir == directions.right) || 
                     (moveDir == directions.up && this.lastMoveDir == directions.down) )
            {
                this.count = 1; //only count the current leg
            }
            else
            {
                //we turned the wrong way, reverse direction
                if(this.curRot == this.clockwise)
                {
                    this.curRot = this.counterclockwise
                }
                else
                {
                    this.curRot = this.clockwise
                }
                this.count = 2; //we count the first leg too, in case they were trying to do this
            }
            this.lastMoveDir = moveDir;
            
            //check for completion
            if (this.count > (ritualCircles*4))
            {
                this.count = 0;
                this.lastMoveDir = 0;
                return true;
            }
            
            return false;
        };
    }
    
    function Player() {
        this.combo = new CircleCombo();
        this.size = new Vector2D( BoxSize - 2, BoxSize - 2 );
        this.ForwardSprites = [];
        this.ForwardSprites[0] = window.LoadSprite( "Guy_Forward_1.png" );
        this.ForwardSprites[1] = window.LoadSprite( "Guy_Forward_2.png" );
        this.ForwardSprites[2] = window.LoadSprite( "Guy_Forward_3.png" );
        this.ForwardSprites[3] = window.LoadSprite( "Guy_Forward_4.png" );
        this.ForwardSprites[4] = window.LoadSprite( "Guy_Forward_5.png" );
        this.ForwardSprites[5] = window.LoadSprite( "Guy_Forward_6.png" );
        this.ForwardSprites[6] = window.LoadSprite( "Guy_Forward_7.png" );
        this.ForwardSprites[7] = window.LoadSprite( "Guy_Forward_8.png" );
        this.ForwardSprites[8] = window.LoadSprite( "Guy_Forward_9.png" );
        this.BackwardSprites = [];
        this.BackwardSprites[0] = window.LoadSprite( "Guy_Backwards_01.png" );
        this.BackwardSprites[1] = window.LoadSprite( "Guy_Backwards_02.png" );
        this.BackwardSprites[2] = window.LoadSprite( "Guy_Backwards_03.png" );
        this.BackwardSprites[3] = window.LoadSprite( "Guy_Backwards_04.png" );
        this.BackwardSprites[4] = window.LoadSprite( "Guy_Backwards_05.png" );
        this.BackwardSprites[5] = window.LoadSprite( "Guy_Backwards_06.png" );
        this.BackwardSprites[6] = window.LoadSprite( "Guy_Backwards_07.png" );
        this.LeftSprites = [];
        this.LeftSprites[0] = window.LoadSprite( "Guy_Sideways_Left_01.png" );
        this.LeftSprites[1] = window.LoadSprite( "Guy_Sideways_Left_02.png" );
        this.LeftSprites[2] = window.LoadSprite( "Guy_Sideways_Left_03.png" );
        this.LeftSprites[3] = window.LoadSprite( "Guy_Sideways_Left_04.png" );
        this.LeftSprites[4] = window.LoadSprite( "Guy_Sideways_Left_05.png" );
        this.LeftSprites[5] = window.LoadSprite( "Guy_Sideways_Left_06.png" );
        this.LeftSprites[6] = window.LoadSprite( "Guy_Sideways_Left_07.png" );
        this.RightSprites = [];
        this.RightSprites[0] = window.LoadSprite( "Guy_Sideways_Right_01.png" );
        this.RightSprites[1] = window.LoadSprite( "Guy_Sideways_Right_02.png" );
        this.RightSprites[2] = window.LoadSprite( "Guy_Sideways_Right_03.png" );
        this.RightSprites[3] = window.LoadSprite( "Guy_Sideways_Right_04.png" );
        this.RightSprites[4] = window.LoadSprite( "Guy_Sideways_Right_05.png" );
        this.RightSprites[5] = window.LoadSprite( "Guy_Sideways_Right_06.png" );
        this.RightSprites[6] = window.LoadSprite( "Guy_Sideways_Right_07.png" );
        this.ForwardAnim = new Animation( this.ForwardSprites, window.PlayerWalkAnimSpeed );
        this.BackwardAnim = new Animation( this.BackwardSprites, window.PlayerWalkAnimSpeed );
        this.LeftAnim = new Animation( this.LeftSprites, window.PlayerWalkAnimSpeed );
        this.RightAnim = new Animation( this.RightSprites, window.PlayerWalkAnimSpeed );
        window.GameObject.call( this, this.ForwardAnim, PlayerStart.x, PlayerStart.y, this.size.x, this.size.y, false );
        this.lastDir = directions.none;

        this.velocity = new Vector2D( 0, 0 );
        
        this.speed = window.PlayerSpeed;
        
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
            var moveDir = directions.none;
            if(keydown.left) {
                moveDir = directions.left;
            }
            
            if(keydown.right) {
                if(moveDir == directions.left)
                {
                    moveDir = directions.none;
                }
                else
                {
                    moveDir = directions.right;
                }
            }
            
            if(keydown.up) {
                moveDir = directions.up;
            }
            
            if(keydown.down) {
                if(moveDir == directions.up)
                {
                    moveDir = directions.none;
                }
                else
                {
                    moveDir = directions.down;
                }
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
                    window.game.RitualComplete();
                }
                didChangeDir = true;
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
            }
            else if(moveDir!=directions.none)
            {
                if(this.sprite.isPaused)
                {
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
            
            //have the camera follow the player
            window.camera.setPosition(this.position);
            
            this.velocity.x = 0;
            this.velocity.y = 0;
            
        };
    };
    
    var ThePlayer = new Player();

    window.player = ThePlayer;
    
}()); // make an anonymous global function expression and immediately call it.