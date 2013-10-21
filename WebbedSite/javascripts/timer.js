(function() {
    
    function TimerCallback ( inTime, inCallback, inCallParam ) {
        this.time = inTime;
        this.callback = inCallback;
        this.callParam = inCallParam;
        this.callFunc = function() {
            //throw back whatever the calling function is returning
            return this.callback(this.callParam);
        };
    };
    
    //doing this the lame way for now, gotta get stuff working
    function Timer() {
        this.callbacks = new Array();
        
        this.AddCallback = function( time, callback, callParam ) {
            var cb = new TimerCallback( time, callback, callParam );
            this.callbacks.push(cb);
            };
            
        
        this.Tick = function() {
            //laaaaammmeeee (way to much iterating over stuff, should only have to subtract a bit off the first one
            for( var i = 0; i < this.callbacks.length; i++ )
            {
                //we're just gonna assume the window setInterval function is doing
                //what it's supposed to
                this.callbacks[i].time -= window.tickLength;
                
                if(this.callbacks[i].time < 0)
                {
                    var resetLength = this.callbacks[i].callFunc();
                    if( resetLength != 0 )
                    {
                        this.callbacks[i].time = resetLength;
                    }
                    else
                    {
                        this.callbacks.splice(i,1); //if we don't get a new length, remove it
                    }
                }
            }
        };
    };
    
    window.Timer = Timer;

}()); // make an anonymous global function expression and immediately call it.