class Chain{
    constructor(body1,body2){
      var  Coption={
            bodyA:body1,
            bodyB:body2,
            length:100
        }
        this.body=Constraint.create(Coption);
        World.add(world,this.body);

        

    }

    display(){
        var pointA=this.body.bodyA.position
        var pointB=this.body.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}