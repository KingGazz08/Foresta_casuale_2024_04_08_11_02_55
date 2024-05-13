/**

  Duplicate this sketch to start your project 🧪
  More info: https://dev.codemotionkids.com/libraries/diorama/docs/
  
  Creative Commons BY-SA

**/

function setup() {
  createCanvas3D(windowWidth, windowHeight);
  getOrbit().autoRotate=true;
  //Change background color of the scene
  background3D("rgb(8,194,255)");
 let albero = beginGroup();
  diffuse("green");
  sphere(0, 3, 0, 2);
  diffuse("brown");
  align(TOP);
  cylinder(0, 0, 0, 0.8, 2.5);
  endGroup();
  let lato=185;
  align(BOTTOM);
  diffuse("#329036");
  box(0,0,0,lato+4,0.50,lato+4);
  for(let i=0;i<800;i++){
    let x=random(-lato/2,lato/2);
    let y=random(-lato/2,lato/2);
  let nuovo_albero=clone(albero,x,0,y);
    let scala=random(0.7,1.3);
    nuovo_albero.setScale(scala);
    setCamera(250,100,7);
  }
 
}

function draw() {
  // 🔍 Never create objects here, but don't forget to have it in your code:
  // leave empty for the moment
}
function windowResized(){
  resizeCanvas3D(windowWidth,windowHeight);
}