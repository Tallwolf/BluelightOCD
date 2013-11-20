$(function() {
  window.keydown = {};
  
  //get the name of the key
  function keyName(event) {
    return jQuery.hotkeys.specialKeys[event.which] ||
      String.fromCharCode(event.which).toLowerCase();
  }
  
  //On button press/release, correct the keydown object 
  $(document).bind("keydown", function(event) {
    window.keydown[keyName(event)] = true;
    
    if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
  });
  
  $(document).bind("keyup", function(event) {
    window.keydown[keyName(event)] = false;
  });
  
  //arbitrary numbers, basically an enum
  //we need a better way to do this, yuck
  function DirEnum(){
      this.none = 0;
      this.up = 1;
      this.down = 2;
      this.left = 3;
      this.right = 4;
      this.dirmax = 5;
  };
  window.directions = new DirEnum();
  
  function CircleCombo() {
        this.clockwise = 1;
        this.counterclockwise = 2;
        
        this.curRot = this.clockwise;
        this.lastMoveDir = directions.none;
        this.count = 0;
        
        this.GetDirNeeded = function () {
            var dirNeeded = 0;
            switch( this.lastMoveDir )
            {
                case directions.up:
                    if(this.curRot == this.clockwise)
                    {
                        dirNeeded = directions.right;
                    }
                    else
                    {
                        dirNeeded = directions.left;
                    }
                break;
                case directions.down:
                    if(this.curRot == this.clockwise)
                    {
                        dirNeeded = directions.left;
                    }
                    else
                    {
                        dirNeeded = directions.right;
                    }
                break;
                case directions.left:
                    if(this.curRot == this.clockwise)
                    {
                        dirNeeded = directions.up;
                    }
                    else
                    {
                        dirNeeded = directions.down;
                    }
                break;
                case directions.right:
                    if(this.curRot == this.clockwise)
                    {
                        dirNeeded = directions.down;
                    }
                    else
                    {
                        dirNeeded = directions.up;
                    }
                break;
                default:
                    alert("invalid move direction");
                break;
            }
            
            return dirNeeded;
        }
        
        this.AddMove = function (moveDir) {
            if(this.lastMoveDir == moveDir)
            {
                return false; //nothing has changed, leave
            }
        
            if(this.count == 0)
            {
                this.lastMoveDir = moveDir;
                this.count++;
                return false; //early out, first move, nothing to do here
            }
            
            var dirNeeded = this.GetDirNeeded();
            
            if(moveDir == dirNeeded)
            {
                this.count++; //we went the right way, add one to the count
                //TODO GET THIS CODE OUTTA HERE!
                if(this.count == 8)
                {
                    window.ritualDoingSound.PlaySoundInterruptLoop();
                }
            }
            else if( (moveDir == directions.right && this.lastMoveDir == directions.left) ||  //if we did a 180, set the count to 1
                     (moveDir == directions.down && this.lastMoveDir == directions.up) ||
                     (moveDir == directions.left && this.lastMoveDir == directions.right) || 
                     (moveDir == directions.up && this.lastMoveDir == directions.down) )
            {
                this.count = 1; //only count the current leg
                window.ritualDoingSound.StopSound();
            }
            else
            {
                //we turned the wrong way, reverse direction
                if(this.curRot == this.clockwise)
                {
                    this.curRot = this.counterclockwise
                }
                else
                {
                    this.curRot = this.clockwise
                }
                this.count = 2; //we count the first leg too, in case they were trying to do this
            }
            this.lastMoveDir = moveDir;
            
            //check for completion
            if (this.count > (ritualCircles*4))
            {
                this.count = 0;
                this.lastMoveDir = 0;
                window.ritualDoingSound.StopSound();
                return true;
            }
            
            return false;
        };
    };
    
    window.CircleCombo = CircleCombo;  
  
}());
