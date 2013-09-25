(function() {

    //This file is here for defines and to give non-coders the ability to tweak game parameters
        
    //Define the canvas and the FPS
    window.CANVAS_WIDTH = 800;
    window.CANVAS_HEIGHT = 600;
    window.FPS = 60;
    window.tickLength = 1000/window.FPS;
    
    //Define the darkness rate
    window.DarknessRate = 50; //ms
    window.DarknessScaleRate = 0.001;
    
    window.PlayerSpeed = 500;
    window.ritualCircles = 5;

}()); // make an anonymous global function expression and immediately call it.