(function() {
        
    function GameObject( spriteName, x, y, w, h, static ) {
    
        this.sprite = new window.LoadSprite(spriteName);
        this.position = new Vector2D( x, y);
        this.physBox = new window.PhysicsBox(this.position.x, this.position.y, w, h, static);
         
        this.draw = function() {
            this.sprite.draw(canvas, this.position ); };
    };
    
    window.GameObject = GameObject;

}()); // make an anonymous global function expression and immediately call it.