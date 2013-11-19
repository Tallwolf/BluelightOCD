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
            var newHeight = (size.x/this.width) * this.height; //get the height, scaled based on the width
            var newY = pos.y + (size.y*0.5) - newHeight;
            var newX = pos.x - (size.x * 0.5); // no scaling in x, just get the left side
             canvas.drawImage(
             this.image,
             this.sourceX,
             this.sourceY,
             this.width,
             this.height,
             newX,//pos.x,
             newY,//pos.y,
             size.x,
             newHeight//size.y
             );
         }
         else
         {
            var newY = pos.y - this.height * 0.5;
            var newX = pos.x - this.width * 0.5;
             canvas.drawImage(
             this.image,
             this.sourceX,
             this.sourceY,
             this.width,
             this.height,
             newX,//pos.x,
             newY,//pos.y,
             this.width,
             this.height
             );
         }
      };
      
      this.destroy = function() {
        delete this.image;
        delete this.sourceX;
        delete this.sourceY;
        delete this.width;
        delete this.height; 
      };
    
      // this.fill = function(canvas, x, y, width, height, repeat) {
          // repeat = repeat || "repeat";
          // var pattern = canvas.createPattern(this.image, repeat);
          // canvas.fillColor(pattern);
          // canvas.fillRect(x, y, width, height);
      // };
  };
  
  function AnimCallback ( inObj, inCallback ) {
        this.obj = inObj;
        this.callback = inCallback;
  };
  
  function AdvanceAnimation( anim ) {
      if(null == anim.sprites)
      {
        return 0; //has been deleted, get rid of it
      }
  
      if(anim.isPaused)
      {
        return anim.playRate;
      }
  
      anim.curSprite+=anim.frameSkip;
      if(anim.curSprite >= anim.numSprites)
      {
        if(anim.loop) {
            anim.curSprite = 0;
        }
        else {
            anim.curSprite = anim.numSprites - 1;
            anim.done = true;
            if(anim.acall)
            {
                anim.acall.callback(anim.acall.obj);
            }
            return 0; // anim done
        }
      }
      return anim.playRate;
  };
  
  //the interface of this function needs to mimic that of the Sprite object for drawing purposes
  //(it would be nice to find a way to force this - like an interface in C#/C++)
  function Animation( inSprites, inPlayRate, inFrameSkip, inLoop, inACall )  {
    this.sprites = inSprites;
    this.numSprites = inSprites.length;
    this.curSprite = 0;
    this.playRate = inPlayRate;
    this.frameSkip = inFrameSkip;
    this.loop = inLoop;
    this.done = false;
    this.acall = inACall;
    this.isPaused = false;
    window.AnimationTimer.AddCallback( inPlayRate, AdvanceAnimation, this );
    this.draw = function(canvas, pos, size) {
        this.sprites[this.curSprite].draw( canvas, pos, size );
    };
    this.destory = function () {
        delete this.sprites;
        delete this.numSprites;
        delete this.curSprite;
        delete this.playRate;
        delete this.isPaused;
    };
    
    this.play = function() {
        this.unpause();
        this.reset();
        if(this.done)
        {
            window.AnimationTimer.AddCallback( inPlayRate, AdvanceAnimation, this );
        }
    }
    
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
  window.AnimCallback = AnimCallback;
}(jQuery)); //this stuff requires jQuery, so we pass it as a parameter so as to not cause collisions
