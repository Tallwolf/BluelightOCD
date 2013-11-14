(function() {

    var MazeDim = new Vector2D(31, 31); //make sure these match up with the matrix
    var WallMatDimensions = new Vector2D(MazeDim.x*2, MazeDim.y*2);
    var MazeMat = [];
    var WallMat = [];
    var NodeStack = [];
    
    function MazeNode( inx, iny, isWall ) {
        this.visited = false;
        this.x = inx;
        this.y = iny;
        this.wall = isWall;
    };
    
    function GenerateMaze() {
        for( var i = 0; i < MazeDim.x; ++i)
        {
            MazeMat[i] = new Array();
            WallMat[i*2+0] = new Array();
            WallMat[i*2+1] = new Array();
            for( var j = 0; j < MazeDim.y; ++j)
            {
                if(((i % 2) == 1) && ((j % 2) == 1))
                {
                    MakePath( i, j );
                }
                else
                {
                    MakeWall( i, j );
                }
            }
        }
        
        //start at the center
        var nodeselectx = (Math.floor( 0.5 * (MazeDim.x-1) * 0.5 ) * 2 + 1);
        var nodeselecty = (Math.floor( 0.5 * (MazeDim.y-1) * 0.5 ) * 2 + 1);
        NodeStack.push(MazeMat[nodeselectx][nodeselecty]);
        WallMat[nodeselectx*2][nodeselecty*2] = 2;
    
        while( NodeStack.length != 0) // B
        {
            var dir = Math.floor(Math.random()*4); //pick a dir, the actual range - 1 (0 not a dir)
            var node = NodeStack[NodeStack.length-1]; //get the top node
            node.visited = true; // mark it as visited
            var neighbor = null;
            var checked = 0;
            while(neighbor == null) //loop until we've checked all directions
            {
                if(checked == 4)
                {
                    break;
                }
                
                dir += 1; //get the current direction
            
                checked++;
                
                if(dir >= window.directions.dirmax)
                {
                    dir = window.directions.none + 1;
                }
                
                if(dir == window.directions.right)
                {
                    var newX = node.x + 2;
                    if(newX >= MazeDim.x)
                    {
                        continue;
                    }
                    neighbor = MazeMat[newX][node.y];
                }
                else if( dir == window.directions.left)
                {
                    var newX = node.x - 2;
                    if(newX < 0)
                    {
                        continue;
                    }
                    neighbor = MazeMat[newX][node.y];
                }
                else if( dir == window.directions.up)
                {
                    var newY = node.y + 2;
                    if(newY >= MazeDim.y)
                    {
                        continue;
                    }
                    neighbor = MazeMat[node.x][newY];
                }
                else if( dir == window.directions.down)
                {
                    var newY = node.y - 2;
                    if(newY < 0)
                    {
                        continue;
                    }
                    neighbor = MazeMat[node.x][newY];
                }
                
                if( (neighbor != null) && (neighbor.visited == true) )
                {
                    neighbor = null;
                    continue;
                }
            }
            
            if(neighbor == null)
            {
                //couldn't find neighbor, get rid of it
                NodeStack.pop();
                continue;
            }
            else
            {
                if(dir == window.directions.right)
                {
                    MakePath( node.x + 1, node.y );
                }
                else if( dir == window.directions.left)
                {
                    MakePath( node.x - 1, node.y );
                }
                else if( dir == window.directions.up)
                {
                    MakePath( node.x, node.y + 1 );
                }
                else if( dir == window.directions.down)
                {
                    MakePath( node.x, node.y - 1 );
                }
                NodeStack.push(neighbor);
            }
        }
    };
    
    function MakeWall( i, j ) { 
        MazeMat[i][j] = new MazeNode( i, j, true ); //wall
        MazeMat[i][j].wall = true;
        WallMat[i*2+0][j*2+0] = 1;
        WallMat[i*2+0][j*2+1] = 1;
        WallMat[i*2+1][j*2+0] = 1;
        WallMat[i*2+1][j*2+1] = 1;
    };
    
    function MakePath ( i, j ) { 
        MazeMat[i][j] = new MazeNode( i, j, false ); //path
        MazeMat[i][j].wall = false;
        WallMat[i*2+0][j*2+0] = (!Math.floor(Math.random()*window.gooRandomChance)*3);
        WallMat[i*2+0][j*2+1] = (!Math.floor(Math.random()*window.gooRandomChance)*3);
        WallMat[i*2+1][j*2+0] = (!Math.floor(Math.random()*window.gooRandomChance)*3);
        WallMat[i*2+1][j*2+1] = (!Math.floor(Math.random()*window.gooRandomChance)*3);
    };
    
    window.GenerateMaze = GenerateMaze;
    window.WallMat = WallMat;
    window.WallMatDimensions = WallMatDimensions;

}()); // make an anonymous global function expression and immediately call it.