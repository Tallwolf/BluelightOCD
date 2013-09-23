(function($) {
    
  function LoaderProxy() {
      this.draw = $.noop;
      this.fill = $.noop;
      this.frame = $.noop;
      this.update = $.noop;
      this.width = null;
      this.height = null;
  }
  
  var tempRetVect = new Vector2D(0,0); //make a rect to hold return values (don't want to call new every frame)
  
  function Sprite(inImage, inSourceX, inSourceY, inWidth, inHeight) {
      this.image = inImage;
      this.sourceX = inSourceX || 0;
      this.sourceY = inSourceY || 0;
      this.width = inWidth || inImage.width;
      this.height = inHeight || inImage.height;

      this.draw = function(canvas, pos) {
         window.camera.transform( pos, tempRetVect );
         canvas.drawImage(
         this.image,
         this.sourceX,
         this.sourceY,
         this.width,
         this.height,
         tempRetVect.x,
         tempRetVect.y,
         this.width,
         this.height
         );
      };
    
      this.fill = function(canvas, x, y, width, height, repeat) {
          repeat = repeat || "repeat";
          var pattern = canvas.createPattern(this.image, repeat);
          canvas.fillColor(pattern);
          canvas.fillRect(x, y, width, height);
      };
  };
  
  function Animation( inSprites, inPlayRate )  {
    this.sprites = inSprites;
    this.numSprites = inSprites.length;
    this.curSprite = 0;
    this.playRate = inPlayRate;
    this.test = 0;
    this.draw = function(canvas, pos) {
        this.test += 1;
        if (this.test >= this.playRate)
        {
            this.curSprite++;
            if(this.curSprite >= this.numSprites)
            {
                this.curSprite = 0;
            }
        }
        this.sprites[this.curSprite].draw( canvas, pos );
    }
  };
  
  function LoadSpriteInternal(name , loadedCallback) {
    var url = spriteImagePath + name;
    var img = new Image();
    var proxy = new LoaderProxy();
    
    //callback once the image is loaded
    img.onload = function() {
      var tile = new Sprite(this);
      
      //make the proxy into a sprite
      $.extend(proxy, tile);
      
      if(loadedCallback) {
        loadedCallback(proxy);
      }
    };
    
    img.src = url;
    
    return proxy;
  };
 
  var spriteImagePath = "images/";

  window.LoadSprite = LoadSpriteInternal;
  window.UnloadedSprite = new LoaderProxy();
  window.Animation = Animation;
}(jQuery)); //this stuff requires jQuery, so we pass it as a parameter so as to not cause collisions
