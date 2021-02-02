class polygon{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.9,
            friction :0.04,
            isStatic: false
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        stroke("white")
        strokeWeight(2)
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        scale(0.5)
        pop();
      }
}