class Particle {
    constructor(x,y) {
      var options = {
          friction:0,restitution:0.5
      }
      this.body = Bodies.circle(x,y,10,options);
      this.color= color(random(0,255), random(0, 255), random(0,255))
      this.radius=10
      World.add(world, this.body);
    }
    display(){
      //var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(0,0, this.radius, this.radius);
      pop();
    }
  };
