(function() {

    var tempRetVect = new Vector2D(0,0); //make a rect to hold return values (don't want to call new every frame)
    
    GameObject.prototype = window.ScreenObject.prototype;
    
    function GameObject( sprite, x, y, w, h, static, objType ) {
        window.ScreenObject.call(this, sprite, x, y ); 
        this.physBox = new window.PhysicsBox(this.position.x, this.position.y, w, h, static, objType, this);
        this.drawSize = new Vector2D(w, h);
        this.gridPosition.x = Math.floor((this.position.x+this.drawSize.x*0.5) / BoxSize);
        this.gridPosition.y = Math.floor((this.position.y+this.drawSize.y*0.5) / BoxSize);
        
        this.onCollide = function( objType ) { };
         
        this.draw = function() {
            //make it relative to the camera
            window.camera.transform( this.position, tempRetVect );
            this.sprite.draw(canvas, tempRetVect, this.drawSize); 
            };
            
        this.destroy = function() {
            window.ScreenObject.prototype.destroy.call(this); //this feels hacky to me, is there a better way?
            this.physBox.destroy();
            delete this.physBox;
            delete this.drawSize;
            };
    };
    
    window.GameObject = GameObject;

}()); // make an anonymous global function expression and immediately call it.