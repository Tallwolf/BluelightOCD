(function() {

var Sound = (function($) {
  var format = $.browser.webkit ? ".mp3" : ".wav";
  var soundPath = "sounds/";
  var sounds = {};

  function loadSound(name) {
    var sound = $('<audio />').get(0);
    sound.src = soundPath + name + format;

    return sound;
  }
  
  function Sound(name) {
    return {
      play: function() {
        Sound.play(name);
      },

      stop: function() {
        Sound.stop(name);
      }
    }
  }

  return $.extend(Sound, {
    play: function(name) {
    
      if(!sounds[name]) {
        sounds[name] = loadSound(name);
      }

      var freeChannels = $.grep(sounds[name], function(sound) {
        return sound.currentTime == sound.duration || sound.currentTime == 0
      });

      if(freeChannels[0]) {
        try {
          freeChannels[0].currentTime = 0;
        } catch(e) {
        }
        freeChannels[0].loop = false;
        freeChannels[0].play();
      } else {
          var sound = loadSound(name);
          sounds[name] = sound;
          sounds[name].loop = false;
          sound.play();
      }
    },
    
    playLoop: function(name) {
    
      if(!sounds[name]) {
        sounds[name] = loadSound(name);
      }

      var freeChannels = $.grep(sounds[name], function(sound) {
        return sound.currentTime == sound.duration || sound.currentTime == 0
      });

      if(freeChannels[0]) {
        try {
          freeChannels[0].currentTime = 0;
        } catch(e) {
        }
        freeChannels[0].loop = true;
        freeChannels[0].play();
      } else {
          var sound = loadSound(name);
          sounds[name] = sound;
          sounds[name].loop = true;
          sound.play();
      }
      
    },

    stop: function(name) {
      if(sounds[name]) {
        sounds[name].pause();
        sounds[name].currentTime = 0;
        //sounds[name].stop();
      }
    },
    
    isPlaying: function(name) {
      if(!sounds[name]) {
        return false;
      }

      return ( (sounds[name].currentTime == sounds[name].duration) || (sounds[name].currentTime == 0) );
    }
    
  });
}(jQuery)); //this stuff requires jQuery, so we pass it as a parameter so as to not cause collisions

  
function PlaySoundInterrupt(name) {
    //console.log("PS Inter: " + name);
    Sound.stop(name);
    Sound.play(name, 1);
}

function PlaySoundIfDone(name) {
    //console.log("PS if done: " + name);
    if(!Sound.isPlaying(name))
    {
        Sound.play(name, 1);
    }
}

function PlaySoundInterruptLoop(name) {
    //console.log("PS InterLoop: " + name);
    Sound.stop(name);
    Sound.playLoop(name, 1);
}

function StopSound(name) {
    //console.log("SS: " + name);
    Sound.stop(name);
}

window.PlaySoundInterrupt = PlaySoundInterrupt;
window.PlaySoundIfDone = PlaySoundIfDone;
window.StopSound = StopSound;
window.PlaySoundInterruptLoop = PlaySoundInterruptLoop;

}()); // make an anonymous global function expression and immediately call it.