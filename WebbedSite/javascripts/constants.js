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
    window.DarknessAnimSpeed = 40;
    window.DarknessAnimFrameSkip = 1;
    window.TimeTillLight = 12000; //ms
    window.LadderSquaresFromPlayer = 4;
    
    window.PlayerSpeed = 500;
    window.ritualCircles = 5;
    window.PlayerWalkAnimSpeed = 20; //higher is slower
    window.PlayerWalkAnimFrameSkip = 4;
    window.GooSpawnAnimSpeed = 40; //higher is slower
    window.GooSpawnAnimFrameSkip = 2;
    window.GooIdleAnimSpeed = 120; //higher is slower
    window.GooIdleAnimFrameSkip = 2;
    window.gooClearRadius = 2; //must be a whole number
    window.gooRandomChance = 10; // 1 over thisNumber
    
    window.BoxSize = 64;
    
    window.TutorialScrollRate = 6;
    window.TutorialPauseTime = 2500;
    window.TutPauseSpaces = [ 600, 1190 ]; // first is implied
    
    window.WinScreenTimeout = 15000;
    window.CreditsScreenTimeout = 10000;
    
    //Other stuff that needs to go here
    window.spriteImagePath = "images/";
    
    window.assetsQueuedToLoad = 0;
    window.maxAssetsQueued = 0;
    window.queuedAssets = [];
    
    window.LoadBarWidth = 200;
    window.LoadBarHeight = 50;
    window.LoadBarX = (CANVAS_WIDTH - LoadBarWidth)*0.5;
    window.LoadBarY = (CANVAS_HEIGHT - LoadBarHeight)*0.5 + 50;
    window.LoadBarBorder = 5;
    
    //an "enum" for types
    function ObjTypeEnum(){
        this.player = 0;
        this.wall = 1;
        this.goo = 2;
        this.ladder = 3;
    };
    window.ObjType = new ObjTypeEnum();
    
    window.updateLoadBar = function () {
        
        if(assetsQueuedToLoad == 0)
        {
            return;
        }
    
        canvas.fillStyle = 'white';
        canvas.fillRect(LoadBarX-LoadBarBorder,LoadBarY-LoadBarBorder,LoadBarWidth+(LoadBarBorder*2), LoadBarHeight+(LoadBarBorder*2));
        canvas.fillStyle = BGColor;
        var adjustedWidth = LoadBarWidth*(assetsQueuedToLoad/maxAssetsQueued);
        canvas.fillRect(LoadBarX + (LoadBarWidth - adjustedWidth),LoadBarY,adjustedWidth, LoadBarHeight);
        if(assetsQueuedToLoad != 0)
        {
            setTimeout(updateLoadBar, (3 * 100));
        }
    }

}()); // make an anonymous global function expression and immediately call it.