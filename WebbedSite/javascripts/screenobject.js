(function() {
        
    function ScreenObject( sprite, x, y ) {
        this.sprite = sprite;//new window.LoadSprite( spriteName );
        this.position = new Vector2D( x, y );
        window.DrawList.push(this);
    };
    
    ScreenObject.prototype.draw = function() {
            this.sprite.draw(canvas, this.position ); };
    
    window.ScreenObject = ScreenObject;

}()); // make an anonymous global function expression and immediately call it.