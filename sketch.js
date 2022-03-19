//need to: animate in the lines, remove th e point placeholders, lerpColor yellow to white the background, blue to purple the line, change color of flowers, figure out how to embed in webflow

let bruin;
let torch;
let montserrat;
let bx=80;
let by=100;
let bsize=50;
let bjump = 1;
let jumped = 0;
let d = 0;
let btextposx=70;
let textpos=175;
let torchjumped = 0;
let torchjump = 1;
let tx;
let ty = by-15;
//let ty = 80;
let nyutextposx;
let nyutextpos = 175;

let yellow = '#ffec99';
let lightblue = '#85ccff';
let darkblue = '#1d2a78';
let darkpurple = '#331a7d';
let lightpurple = '#cac2ff';
let int = 0;
let c;

let weight=0;
let endx=bx+25;
let rate=1;

let torchtimer;
let timer;

let cnv;

function preload(){
  bruin = loadImage('https://cdn.jsdelivr.net/gh/lillylin998/portfolio-bg-animation@main/bear.png');
  torch = loadImage('https://cdn.jsdelivr.net/gh/lillylin998/portfolio-bg-animation@main/torch.png');
  montserrat = loadFont('https://cdn.jsdelivr.net/gh/lillylin998/portfolio-animations@main/Montserrat-Regular.ttf');
}

function setup() {
  cnv = createCanvas(windowWidth, 300);
  cnv.parent('bg-sketch');
  angleMode(DEGREES);
 nyutextposx=width-80;
  tx = width-125
}

function draw() {
 // background(220);
 bgGradient(0,0,width,height);
  
//vines
  push()
if(millis()-timer>1600){
  noFill()
  int = endx/(tx+20);

  c = lerpColor(color(lightblue),color('#FFFFFF'),int)
push();
   strokeWeight(3)
  stroke(c)
//map(endx,0,millis(),bx+25,tx);
  if(endx<tx+20){
    endx+=5;
  }
  line(bx+25,by+25,endx,by+25);
}
  pop();
//bruinbear
  image(bruin,bx,by,bsize,bsize);
  if(jumped<2){
    timer=millis();
  if (by === 100){
    bjump *= -1;
    jumped += 1;
  }
  if(bjump != 0){
    by += bjump;
    bjump += 0.1;
  } 
  }

  

//animate them popping in one by one
  if(millis()-timer>=200){
  flower(60,115); 
  }
  if(millis()-timer>=400){
  flower(88,75);
  }
  if(millis()-timer>=600){
  flower(150,105);
  }
  
//text
//UCLA class of 2019
//Psychology B.A.
//Specialization in computing
//RA in systems neuroscience research (Adhikari Lab)
  push();
  fill(darkblue)
  if(millis()-timer>=800){
    textSize(width/60);
    noStroke();
    textFont(montserrat);
    text('UCLA Class of 2019',btextposx,textpos);
  }
  if(millis()-timer >=1000){
    text('Psychology B.A.', btextposx, textpos+20);
  }
  if(millis()-timer >=1200){
    text('Specialization in Computing', btextposx, textpos+40);
  }
    if(millis()-timer >=1400){
    text('RA in systems neuroscience research (Adhikari Lab)', btextposx, textpos+60);
  }
  pop();

//torch image appears
if(millis()-timer>=1600){
  image(torch,width-125,ty,45,70)
   if(torchjumped<2){
    torchtimer=millis();
  if (ty === 100-15){
    torchjump *= -1;
    torchjumped += 1;
  }
  if(torchjump != 0){
    ty += torchjump;
    torchjump += 0.1;
  } 
  }


  
}
  //flowers appear one by one
  if(millis()-torchtimer>=200){
  flower(width-125,60); 
  }
  if(millis()-torchtimer>=400){
  flower(width-75,70);
  }
  if(millis()-torchtimer>=600){
  flower(width-70,130);
  }
  
//text
//NYU Class of 2022
//Integrated Design and Media (IDM) M.S. 
//UX Researcher
//Creative Coding Graduate Assistant
  push()
  fill(darkblue)
 
  textAlign(RIGHT)
    if(millis()-torchtimer>=1000){
    textSize(width/60);
    noStroke();
    textFont(montserrat);
    text('NYU Class of 2022',nyutextposx,nyutextpos);
  }
  if(millis()-torchtimer >=1200){
    text('Integrated Design and Media (IDM) M.S.', nyutextposx, nyutextpos+20);
  }
  if(millis()-torchtimer >=1400){
    text('UX Researcher', nyutextposx, nyutextpos+40);
  }
    if(millis()-torchtimer >=1600){
    text('Creative Coding Graduate Assistant', nyutextposx, nyutextpos+60);
  }
  pop()
  
}

function flower(x,y){
  push();
  for(let i=0;i<6;i++){
    fill(255)
  
    stroke(darkblue);
  petal(d,x,y);
    d+=60
  }
  fill(yellow);
  circle(x,y,10);
  d+=0.2;
  pop();
}

function petal(deg,x,y){
  push();   

  translate(x,y)
  rotate(deg)
  beginShape();
  vertex(0,0);
  bezierVertex(10,-30,30,5,0,0)
  endShape();  
  pop();

}

function vinePartOne(){
  if(weight<4){
  strokeWeight(weight)
    weight+= 0.1;
  }
  if(weight>=4){
    strokeWeight(4)
  }
//first curve

beginShape();
vertex(bx+25,by+25);
quadraticVertex(bx+75,by+25,bx+125,by-20);
endShape();

  
// strokeWeight(4)
// point(bx+125,by-20)
}

function vinePartTwo(){
  
  //second curve
  if(weight<8){
  strokeWeight(weight-4)
    weight+=0.1;
  }
  if(weight>=8){
    strokeWeight(4);
  }
  beginShape();
  vertex(bx+125,by-20)
  quadraticVertex(bx+200,by-100,bx+250,by-110);
  endShape();

//   strokeWeight(4)
// point(bx+250,by-110)
}

function vinePartThree(){
  //3rd curve
   if(weight<12){
  strokeWeight(weight-8)
    weight+=0.1;
  }
  if(weight>=12){
    strokeWeight(4);
  }
  beginShape();
  vertex(bx+250,by-110)
  quadraticVertex(bx+330,by-130,bx+400,by-95);
  endShape();

//   strokeWeight(4)
//   point(bx+400,by-95)
  
}

function vinePartFour(){
  
  //4th curve
   if(weight<16){
  strokeWeight(weight-12)
    weight+=0.1;
  }
  if(weight>=16){
    strokeWeight(4);
  }
  beginShape();
  vertex(bx+400,by-95)
  quadraticVertex(bx+450,by-75,bx+500,by-75);
  endShape();
  
  // strokeWeight(4)
  // point(bx+500,by-75)
}

function vinePartFive(){
  //5th curve
   if(weight<20){
  strokeWeight(weight-16)
    weight+=0.1;
  }
  if(weight>=20){
    strokeWeight(4);
  }
  beginShape();
  vertex(bx+500,by-75)
  quadraticVertex(bx+540,by-75,bx+620,by-110);
  endShape();

}

function bgGradient(x,y,w,h){
       for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(color(yellow), color(lightpurple), inter);
      stroke(c);
      line(i, y, i, y + h);
    }
}

