class Plinko{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.d = 10;
        this.body = Bodies.circle(x,y,this.d,options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        noStroke();
        fill("white");
        ellipse(pos.x,pos.y,this.d,this.d);
        pop();
    }
}