(function() {
        
    function ScreenObject( spriteName, x, y ) {
        this.sprite = new window.LoadSprite( spriteName );
        this.position = new Vector2D( x, y );
    };
    
    ScreenObject.prototype.draw = function() {
            this.sprite.draw(canvas, this.position ); };
    
    window.ScreenObject = ScreenObject;

}()); // make an anonymous global function expression and immediately call it.