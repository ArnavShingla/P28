class Stone{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            friction:1.0,
            density:1.2,
            restitution:0
        }
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/Stone.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        
        
      
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width*2, this.height*2);
        pop();
      }
}