class blueOre{
  constructor(x,y) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.image=loadImage("BLUE ore.png");
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);
  }
display(){
  image(this.image,this.body.position.x,this.body.position.y,this.width,this.width)
}

  /*display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }*/
}
