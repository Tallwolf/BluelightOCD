(function() {

    var PlayerStart = new Vector2D(50,270);
    
    Player.prototype = window.GameObject.prototype;
    
    //arbitrary numbers, basically an enum
    //we need a better way to do this, yuck
    function DirEnum(){
        this.up = 1;
        this.down = 2;
        this.left = 3;
        this.right = 4;
    };
    window.directions = new DirEnum();
    
    function CircleCombo() {
        this.clockwise = 1;
        this.counterclockwise = 2;
        
        this.curRot = this.clockwise;
        this.lastMoveDir = 0;
        this.count = 0;
        
        this.GetDirNeeded = function () {
            var dirNeeded = 0;
            switch( this.lastMoveDir )
            {
                case window.directions.up:
                    if(this.curRot == this.clockwise)
                    {
                        dirNeeded = window.directions.right;
                    }
                    else
                    {
                        dirNeeded = window.directions.left;
                    }
                break;
                case window.directions.down:
                    if(this.curRot == this.clockwise)
                    {
                        dirNeeded = window.directions.left;
                    }
                    else
                    {
                        dirNeeded = window.directions.right;
                    }
                break;
                case window.directions.left:
                    if(this.curRot == this.clockwise)
                    {
                        dirNeeded = window.directions.up;
                    }
                    else
                    {
                        dirNeeded = window.directions.down;
                    }
                break;
                case window.directions.right:
                    if(this.curRot == this.clockwise)
                    {
                        dirNeeded = window.directions.down;
                    }
                    else
                    {
                        dirNeeded = window.directions.up;
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
            else if( (moveDir == window.directions.right && this.lastMoveDir == window.directions.left) ||  //if we did a 180, set the count to 1
                     (moveDir == window.directions.down && this.lastMoveDir == window.directions.up) ||
                     (moveDir == window.directions.left && this.lastMoveDir == window.directions.right) || 
                     (moveDir == window.directions.up && this.lastMoveDir == window.directions.down) )
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
        this.size = new Vector2D( 30, 30 );
        var sprites = [];
        sprites[0] = window.LoadSprite( "player.png" );
        sprites[1] = window.LoadSprite( "player2.png" );
        var anim = new Animation( sprites, 500 );
        window.GameObject.call( this, anim, PlayerStart.x, PlayerStart.y, this.size.x, this.size.y, false );
        this.lastDir = new Array(5);

        this.velocity = new Vector2D( 0, 0 );
        
        this.speed = window.PlayerSpeed;
        
        this.checkInput = function () {
            var didMove = false;
            if(keydown.left) {
                this.move(window.directions.left);
                didMove = true;
            }
            else
            {
                this.lastDir[window.directions.left] = 0;
            }
            
            if(keydown.right) {
                this.move(window.directions.right);
                didMove = true;
            }
            else
            {
                this.lastDir[window.directions.right] = 0;
            }
            
            if(keydown.up) {
                this.move(window.directions.up);
                didMove = true;
            }
            else
            {
                this.lastDir[window.directions.up] = 0;
            }
            
            if(keydown.down) {
                this.move(window.directions.down);
                didMove = true;
            }
            else
            {
                this.lastDir[window.directions.down] = 0;
            }
            return didMove;
        };
        
        this.move = function( moveDir ) {
            switch( moveDir )
            {
                case window.directions.up:
                    this.velocity.y = -this.speed;
                break;
                case window.directions.down:
                    this.velocity.y = this.speed;
                break;
                case window.directions.left:
                    this.velocity.x = -this.speed;
                break;
                case window.directions.right:
                    this.velocity.x = this.speed;
                break;
                default:
                    alert("invalid move direction");
                break;
            }
            if( this.lastDir[moveDir] != 1 )
            {
                if( this.combo.AddMove(moveDir) )
                {
                    window.game.RitualComplete();
                }
                this.lastDir[moveDir] = 1;
            }
        };
        
        this.update = function() {
            var didMove = this.checkInput();
            
            // if(!didMove && !this.sprite.isPaused)
            // {
                // this.sprite.pause();
                // this.sprite.reset();
            // }
            // else if(didMove && this.sprite.isPaused)
            // {
                // this.sprite.unpause();
            // }
            
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