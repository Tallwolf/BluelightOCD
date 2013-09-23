(function() {

    var PlayerStart = new Vector2D(50,270);
    
    Player.prototype = window.GameObject.prototype;
    
    function Player()
    {
        this.size = new Vector2D( 30, 30 );
        window.GameObject.call( this, "player.png", PlayerStart.x, PlayerStart.y, this.size.x, this.size.y, false );

        this.velocity = new Vector2D( 0, 0 );
        //this.physBox = new window.PhysicsBox(this.position.x, this.position.y, this.size.x, this.size.y, false);
        
        this.up = 1;
        this.down = 2;
        this.left = 3;
        this.right = 4;
        this.speed = 500;
        
        this.move = function( moveDir ) {
            switch( moveDir)
            {
                case 1:
                    this.velocity.y = -this.speed;
                break;
                case 2:
                    this.velocity.y = this.speed;
                break;
                case 3:
                    this.velocity.x = -this.speed;
                break;
                case 4:
                    this.velocity.x = this.speed;
                break;
                default:
                break;
            }
        }
        
        this.update = function() {
            
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