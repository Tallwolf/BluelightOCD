(function() {

    //This file is here for defines and to give non-coders the ability to tweak game parameters
        
    //Define the canvas and the FPS
    window.CANVAS_WIDTH = 800;
    window.CANVAS_HEIGHT = 600;
    window.FPS = 60;
    window.tickLength = 1000/window.FPS;
    window.BGColor = "#111111";
    
    //Define the darkness rate
    window.DarknessRate = 5; //how often it resizes in ms
    window.DarknessScaleRate = 0.002; //how much it resizes by
    
    window.PlayerSpeed = 500;
    window.ritualCircles = 5;
    window.PlayerWalkAnimSpeed = 100;
    window.gooClearRadius = 2; //must be a whole number
    
    window.BoxSize = 64;
    
    
    
    //Other stuff that needs to go here
    //an "enum" for types
    function ObjTypeEnum(){
        this.player = 0;
        this.wall = 1;
        this.goo = 2;
    };
    window.ObjType = new ObjTypeEnum();

}()); // make an anonymous global function expression and immediately call it.