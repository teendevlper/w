const Engine      =  Matter.Engine;
const Bodies      =  Matter.Bodies;
const World       =  Matter.World;
const Constraint  =  Matter.Constraint;

var engine;

var plyr,wire,flor,flour;

//pyramid 1
var box$;
var boxx,boxxx;
var boxi,boxii,boxiii;
var boxa,boxb,boxc,boxd;
var box1,box2,box3,box4,box5;

//pyramid 2 
var box$i;
var boxxi,boxxxi;
var boxiij,boxiiij,boxiiii;
var boxai,boxbi,boxci,boxdi;
var box1i,box2i,box3i,box4i,box5i;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world  = engine.world; 

  plyr   =  new player(120,200,2,30,15);
  wire   =  new catapult(plyr.body, {x : 100, y : 200});
  flor   =  new floor(260,300,130,10);
  flour  =  new floor(500,230,130,10);
  // b o t t o m   l a y e r
  box1   =  new box(221,280,20,20);
  box2   =  new box(240,280,20,20);
  box3   =  new box(260,280,20,20);
  box4   =  new box(280,280,20,20);
  box5   =  new box(300,280,20,20);
  // 2 n d    l a y e r
  boxa   =  new box(230,250,20,20);
  boxb   =  new box(250,250,20,20);
  boxc   =  new box(270,250,20,20);
  boxd   =  new box(290,250,20,20);
  // 3 r d   l a y e r 
  boxi   =  new box(240,225,20,20);
  boxii  =  new box(260,225,20,20);
  boxiii =  new box(280,225,20,20);
  // 4 t h   l a y e r
  boxx   =  new box(250,200,20,20);
  boxxx  =  new box(270,200,20,20);
  // t o p  l a y e r
  box$   =  new box(260,180,20,20);


  box1i   =  new box(460,200,20,20);
  box2i   =  new box(480,200,20,20);
  box3i   =  new box(500,200,20,20);
  box4i   =  new box(520,200,20,20);
  box5i   =  new box(540,200,20,20);
  // 2 n d    l a y e r
  boxai   =  new box(470,180,20,20);
  boxbi   =  new box(490,180,20,20);
  boxci   =  new box(510,180,20,20);
  boxdi   =  new box(530,180,20,20);
  // 3 r d   l a y e r 
  boxiij  =  new box(480,160,20,20);
 boxiiij  =  new box(500,160,20,20);
  boxiiii =  new box(520,160,20,20);
  // 4 t h   l a y e r
  boxxi   =  new box(491,140,20,20);
  boxxxi  =  new box(512,140,20,20);
  // t o p  l a y e r
  box$i   =  new box(500,125,20,20);

}

function draw() {
  background("grey");  
  Engine.update(engine);
  

  plyr.display();
  flor.display();
  flour.display();
  wire.display();
  //bottom layer
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  //2nd layer
  boxa.display();
  boxb.display();
  boxc.display();
  boxd.display();
  //3rd layer
  boxi.display();
  boxii.display();
  boxiii.display();
  //4th layer
  boxx.display();
  boxxx.display();
  //top layer
  box$.display();

  //bottom layer
  box1i.display();
  box2i.display();
  box3i.display();
  box4i.display();
  box5i.display();
  //2nd layer
  boxai.display();
  boxbi.display();
  boxci.display();
  boxdi.display();
  //3rd layer
  boxiij.display();
  boxiiij.display();
  boxiiii.display();
  //4th layer
  boxxi.display();
  boxxxi.display();
  //top layer
  box$i.display();
}

function mouseDragged(){
  Matter.Body.setPosition(plyr.body, {x : mouseX, y : mouseY });
}

function mouseReleased(){
  wire.fly();
}