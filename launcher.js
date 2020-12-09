class Launcher{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.body = Constraint.create(options);
        World.add(world, this.body);
        console.log(this.body);
    }

    fly(){
        this.body.bodyA = null;
        //null means empty or nothing => false
    }

    
    

    display(){
        if(this.body.bodyA!=null){
            var pointA = this.body.bodyA.position;
            var pointB = this.body.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}