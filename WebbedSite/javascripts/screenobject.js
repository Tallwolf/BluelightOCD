(function() {
        
    function ScreenObject( sprite, x, y, noListflag ) {
        this.sprite = sprite;
        this.position = new Vector2D( x, y );
        var girX = Math.floor((this.position.x) / BoxSize);
        var girY = Math.floor((this.position.y) / BoxSize);
        this.gridPosition = new Vector2D( girX, girY );
        if(noListflag)
        {
        }
        else
        {
            window.DrawList.push(this);
        }
    };
    
    ScreenObject.prototype.draw = function() {
            this.sprite.draw(canvas, this.position ); 
            };
            
    ScreenObject.prototype.destroy = function() {
            var index = window.DrawList.indexOf(this);
            window.DrawList.splice(index, 1);
            delete this.sprite; //delete the reference to the sprite, not the sprite itself
            delete this.position;
            };
    
    window.ScreenObject = ScreenObject;

}()); // make an anonymous global function expression and immediately call it.