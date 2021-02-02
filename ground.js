class Ground{

    constructor(x,y,width,height){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(x,y,width,height,ground_options)
          this.width = width;
          this.height = height;
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
    }
}