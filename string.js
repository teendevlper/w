class catapult {
    constructor( bodyA, pointB ){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }
     
     this.pointB  =  pointB;
     this.wire   =  Constraint.create(options);
     World.add(world, this.wire);
    }
 fly() {
     this.wire.bodyA = null;
 }
 
    display() {
      push();
      if(this.wire.bodyA) {
        var pointA = this.wire.bodyA.position;
        var pointB = this.pointB;
        stroke( 234, 88, 249 );
        strokeWeight(4);
      line( pointA.x, pointA.y, pointB.x, pointB.y );
    }
    pop();  
  }
}