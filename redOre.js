class redOre{
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.image=loadImage("RED ore.png");
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
  display(){
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.width)
  }
}