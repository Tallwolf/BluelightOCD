(function($) {

var formats = [ "wav", "mp3" ]; //$.browser.webkit ? ".mp3" : ".wav";
var soundPath = "sounds/";
var sounds = {};

function SoundObject (inBuzzSound) {
    //this.DOMSound = inDOMSound;
    this.BuzzSound = inBuzzSound
    this.isLoaded = true;
    this.play = function() {
        if(!this.isLoaded)
        {
            return;
        }
        this.BuzzSound.unloop();
        this.BuzzSound.play();
    };
    
    this.playLoop = function() {
        if(!this.isLoaded)
        {
            return;
        }
        this.BuzzSound.loop();
        this.BuzzSound.play();
    };

    this.stop = function() {
        if(!this.isLoaded)
        {
            return;
        }
        this.BuzzSound.stop();
    };
    
    this.isPlaying = function() {
        if(!this.isLoaded)
        {
            return;
        }
        var result = ((this.buzzSound.getTime() != 0) || this.buzzSound.isEnded() || this.buzzSound.isPaused());
        return result;
    };
};

  
function SoundHandle (inSoundObj) {
    this.sound = inSoundObj;
    this.PlaySoundInterrupt = function () {
        //console.log("PS Inter: " + name);
        //this.sound.stop();
        this.sound.play();
    };

    this.PlaySoundIfDone = function () {
        //console.log("PS if done: " + name);
        if(!this.sound.isPlaying())
        {
            this.sound.play();
        }
    };

    this.PlaySoundInterruptLoop = function () {
        //console.log("PS InterLoop: " + name);
        this.sound.stop();
        this.sound.playLoop();
    };

    this.StopSound = function () {
        //console.log("SS: " + name);
        this.sound.stop();
    };
};

function LoadSound(name) {
    var BuzzSound = new buzz.sound((soundPath + name),{
    formats: [ "mp3", "wav" ]
    }); 
    var soundObj = new SoundObject(BuzzSound);
    var soundHandle = new SoundHandle(soundObj);
    
    return soundHandle;
}

window.ritualEndSound = LoadSound("RitualEnd");
window.gooWalkSound = LoadSound("GooWalkLoop");
window.backgroundNormSound = LoadSound("BgndNormLoop");
window.backgroundScarySound = LoadSound("BgndScaryLoop");
window.ritualDoingSound = LoadSound("DoingRitual");
window.winSound = LoadSound("WinLoop");

window.backgroundSound = backgroundNormSound;

}(jQuery)); // make an anonymous global function expression and immediately call it.