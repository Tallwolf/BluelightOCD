(function() {

    //This file is here for defines and to give non-coders the ability to tweak game parameters
        
    //Define the canvas and the FPS
    window.CANVAS_WIDTH = 800;
    window.CANVAS_HEIGHT = 600;
    window.FPS = 60;
    window.tickLength = 1000/window.FPS;
    window.BGColor = "#111111";
    
    //Define the darkness rate
    window.DarknessRate = 10; //ms
    window.DarknessScaleRate = 0.001;
    
    window.PlayerSpeed = 500;
    window.ritualCircles = 5;
    window.PlayerWalkAnimSpeed = 100;
    
    window.BoxSize = 64;
    
    
    
    //Other stuff that needs to go here
    //an "enum" for types
    function ObjTypeEnum(){
        this.player = 0;
        this.wall = 1;
    };
    window.ObjType = new ObjTypeEnum();

}()); // make an anonymous global function expression and immediately call it.