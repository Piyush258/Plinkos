class Particle{
    constructor(x,y,d){
        var options={
            restitution:0.4
        }
        this.d = d;
        this.body = Bodies.circle(x,y,this.d,options);
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.d,this.d);
        pop();
    }
}