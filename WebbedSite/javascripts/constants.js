(function() {

    //This file is here for defines and to give non-coders the ability to tweak game parameters
        
    //Define the canvas and the FPS
    window.CANVAS_WIDTH = 800;
    window.CANVAS_HEIGHT = 600;
    window.FPS = 60;
    window.tickLength = 1000/window.FPS;
    window.BGColor = "#222222";
    
    //Define the darkness rate
    window.DarknessRate = 24; //how often it resizes in ms
    window.DarknessScaleRate = 0.002; //how much it resizes by
    window.TimeTillLight = 12000; //ms
    window.LadderSquaresFromPlayer = 5;
    
    window.PlayerSpeed = 500;
    window.ritualCircles = 5;
    window.PlayerWalkAnimSpeed = 20; //higher is slower
    window.PlayerWalkAnimFrameSkip = 4;
    window.GooSpawnAnimSpeed = 40; //higher is slower
    window.GooSpawnAnimFrameSkip = 2;
    window.GooWitherAnimSpeed = 120; //higher is slower
    window.GooWitherAnimFrameSkip = 2;
    window.gooClearRadius = 2; //must be a whole number
    window.gooRandomChance = 10; // 1 over thisNumber
    
    window.BoxSize = 64;
    
    
    
    //Other stuff that needs to go here
    //an "enum" for types
    function ObjTypeEnum(){
        this.player = 0;
        this.wall = 1;
        this.goo = 2;
        this.ladder = 3;
    };
    window.ObjType = new ObjTypeEnum();

}()); // make an anonymous global function expression and immediately call it.