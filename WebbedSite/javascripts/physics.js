(function() {
    
    var   b2Vec2 = Box2D.Common.Math.b2Vec2
    ,	b2BodyDef = Box2D.Dynamics.b2BodyDef
    ,	b2Body = Box2D.Dynamics.b2Body
    ,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
    ,	b2Fixture = Box2D.Dynamics.b2Fixture
    ,	b2World = Box2D.Dynamics.b2World
    ,	b2MassData = Box2D.Collision.Shapes.b2MassData
    ,	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
    ,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
    ,	b2DebugDraw = Box2D.Dynamics.b2DebugDraw
    ;
    
    //init this out here in global space, so that other things can use it in their c-tors
    var MyWorld = new b2World(
           new b2Vec2(0, 0)    //gravity
        ,  false               //disallow sleep
        );
    
    var worldScale = 10;
    var invWorldScale = 1 / worldScale;
    
    var fixDef = new b2FixtureDef;
    var bodyDef = new b2BodyDef;
    var IsInit = false;
    
    //set up basic parameters
    fixDef.density = 1.0;
    fixDef.friction = 0.0; //we don't need friction
    fixDef.restitution = 0.2;

    //no rotation, everything axis aligned unless we need it later
    bodyDef.fixedRotation = true;
    
    function PhysInit() {         
         //setup debug draw
         var debugDraw = new b2DebugDraw();
			debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));
			debugDraw.SetDrawScale(worldScale);
			debugDraw.SetFillAlpha(0.3);
			debugDraw.SetLineThickness(1.0);
			debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
			MyWorld.SetDebugDraw(debugDraw);
            
        IsInit = true;
    }
    
    var allPurposeVector = new b2Vec2();
    
    function PhysBox( x, y, w, h, isStatic ) {
    
            this.body;
            this.size = new Vector2D( w, h );
            
            if(isStatic)
            {
                bodyDef.type = b2Body.b2_staticBody;
            }
            else
            {
                bodyDef.type = b2Body.b2_dynamicBody;
            }
            
            this.setVel = function( inVel ) {              
                allPurposeVector.Set(inVel.x * invWorldScale, inVel.y * invWorldScale);
                
                this.body.SetLinearVelocity( allPurposeVector );
            };
            
            this.getPos = function( outPos ) {
                outPos.x = (this.body.GetPosition().x) * worldScale - this.size.x * 0.5;
                outPos.y = (this.body.GetPosition().y) * worldScale - this.size.y * 0.5;
            };
    
            fixDef.shape = new b2PolygonShape;
            fixDef.shape.SetAsBox( w * 0.5 * invWorldScale,  h * 0.5 * invWorldScale);
            bodyDef.position.x = (x + w * 0.5) * invWorldScale;
            bodyDef.position.y = (y + h * 0.5) * invWorldScale;
            this.body = MyWorld.CreateBody(bodyDef)
            this.body.CreateFixture(fixDef);
    }
    
    function PhysUpdate() {
        if(!IsInit)
        {
            alert("Physics System needs to be initialized before updating it!");
        }
        MyWorld.Step(
               1 / 60   //frame-rate
            ,  10       //velocity iterations
            ,  10       //position iterations
         );
         MyWorld.ClearForces();
    }
    
    function PhysDraw() {
        if(!IsInit)
        {
            alert("Physics System needs to be initialized before drawing it!");
        }
            
        MyWorld.DrawDebugData();
    }
    
    window.PhysicsInit = PhysInit;
    window.PhysicsUpdate = PhysUpdate;
    window.PhysicsDraw = PhysDraw;
    window.PhysicsBox = PhysBox;
}());// make an anonymous global function expression and immediately call it.