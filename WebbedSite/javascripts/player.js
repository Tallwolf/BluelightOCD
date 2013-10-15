(function() {

    var PlayerStart = new Vector2D(50,270);
    
    Player.prototype = window.GameObject.prototype;
    
    function Player() {
        this.combo = new window.CircleCombo();
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
        window.GameObject.call( this, this.ForwardAnim, PlayerStart.x, PlayerStart.y, this.size.x, this.size.y, false, window.ObjType.player );
        this.lastDir = directions.none;
        this.lastInput = new Array(5);

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