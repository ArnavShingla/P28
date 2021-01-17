class Mango{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
            friction:1.0,
            restititution:0
        }

        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/Mango.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        
       
        World.add(world, this.body);
      }
      display(){
       var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width*2, this.height*2);
        this.image.scale=0.5;
        pop();
      }
}