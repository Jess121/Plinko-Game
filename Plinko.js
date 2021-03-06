class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true,
          friction:0,restitution:1
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius=10
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("white");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };
