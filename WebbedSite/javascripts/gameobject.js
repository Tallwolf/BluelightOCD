(function() {

    var tempRetVect = new Vector2D(0,0); //make a rect to hold return values (don't want to call new every frame)
    
    GameObject.prototype = window.ScreenObject.prototype;
    
    function GameObject( spriteName, x, y, w, h, static ) {
        window.ScreenObject.call(this, spriteName, x, y ); 
        this.physBox = new window.PhysicsBox(this.position.x, this.position.y, w, h, static);
         
        this.draw = function() {
            //make it relative to the camera
            window.camera.transform( this.position, tempRetVect );
            this.sprite.draw(canvas, tempRetVect); 
            };
    };
    
    window.GameObject = GameObject;

}()); // make an anonymous global function expression and immediately call it.