class player {
     constructor( x, y, sides, radius ) {
         var options = {
             isStatic : false,
             restitution : 0.5,
             friction : 0.5,
             density : 1.5
         }
   this.body   =  Bodies.polygon( x, y, sides, radius, options );
   this.sides = sides;
   this.radius =  radius;
   this.image = loadImage("a.png");

   World.add( world, this.body);  
    }
   
 display() {
    var pos = this.body.position;
   fill("red");
   imageMode(CENTER);
   image(this.image, pos.x, pos.y, 30, 30);
  
  }  
     
}