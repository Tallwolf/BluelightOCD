(function($) {
    
    var DrawList = [];
    
  function LoaderProxy() {
      this.draw = $.noop;
      this.fill = $.noop;
      this.frame = $.noop;
      this.update = $.noop;
      this.width = null;
      this.height = null;
  }
  
  function Sprite(inImage, inSourceX, inSourceY, inWidth, inHeight) {
      this.image = inImage;
      this.sourceX = inSourceX || 0;
      this.sourceY = inSourceY || 0;
      this.width = inWidth || inImage.width;
      this.height = inHeight || inImage.height;

      this.draw = function(canvas, pos, size) {
         if(size)
         {
            var newHeight = (size.x/this.width) * this.height;
            var newY = (pos.y + size.y) - newHeight;
             canvas.drawImage(
             this.image,
             this.sourceX,
             this.sourceY,
             this.width,
             this.height,
             pos.x,
             newY,//pos.y,
             size.x,
             newHeight//size.y
             );
         }
         else
         {
             canvas.drawImage(
             this.image,
             this.sourceX,
             this.sourceY,
             this.width,
             this.height,
             pos.x,
             pos.y,
             this.width,
             this.height
             );
         }
      };
    
      // this.fill = function(canvas, x, y, width, height, repeat) {
          // repeat = repeat || "repeat";
          // var pattern = canvas.createPattern(this.image, repeat);
          // canvas.fillColor(pattern);
          // canvas.fillRect(x, y, width, height);
      // };
  };
  
  function AdvanceAnimation( anim ) {
      if(anim.isPaused)
      {
        return anim.playRate;
      }
  
      anim.curSprite++;
      if(anim.curSprite >= anim.numSprites)
      {
          anim.curSprite = 0;
      }
      return anim.playRate;
  };
  
  //the interface of this function needs to mimic that of the Sprite object for drawing purposes
  //(it would be nice to find a way to force this - like an interface in C#/C++)
  function Animation( inSprites, inPlayRate )  {
    this.sprites = inSprites;
    this.numSprites = inSprites.length;
    this.curSprite = 0;
    this.playRate = inPlayRate;
    this.isPaused = false;
    window.AnimationTimer.AddCallback( inPlayRate, AdvanceAnimation, this );
    this.draw = function(canvas, pos, size) {
        this.sprites[this.curSprite].draw( canvas, pos, size );
    };
    this.pause = function() {
        if(this.isPaused) return; //don't do it twice
        this.isPaused = true;
    }
    this.unpause = function() {
        if(!this.isPaused) return; //not paused, leave
        this.isPaused = false;
    }
    this.reset = function() {
        this.curSprite = 0;
    };
  };
  
  function LoadSpriteInternal( name, loadedCallback, callbackParam ) {
    //we really ought to check to make sure we don't already have the sprite loaded
    var url = spriteImagePath + name;
    var img = new Image();
    var proxy = new LoaderProxy();
    
    //callback once the image is loaded
    img.onload = function() {
      var tile = new Sprite(this);
      
      //make the proxy into a sprite
      $.extend(proxy, tile);
      
      if(loadedCallback) {
        loadedCallback( proxy, callbackParam );
      }
    };
    
    img.src = url;
    
    return proxy;
  };
 
  var spriteImagePath = "images/";

  window.LoadSprite = LoadSpriteInternal;
  window.UnloadedSprite = new LoaderProxy();
  window.Animation = Animation;
  window.AnimationTimer = new window.Timer();
  window.DrawList = DrawList;
}(jQuery)); //this stuff requires jQuery, so we pass it as a parameter so as to not cause collisions
