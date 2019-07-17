const words = ['HMTL', 'CSS', '</>', 'JS', 'Code', 'Nodejs', 'React', 'SASS', 'LESS', 'Python', 'Jest', 'API', 'Dev']

class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.pop = false;
    this.word = words[Math.floor(Math.random()*words.length)];
  }
  
  drawBubble() {
    noFill();
    stroke(255);
    ellipse(this.x, this.y, this.size, this.size);
    if(this.size > 60){
      text(this.word, this.x - this.size / 3, this.y + this.size / 8)
    }
    this.y -= this.size / 20;
    this.x += Math.random()*(.5 - -.5) + -.5;
    if(this.y < 0 - this.size) {
      this.pop = true; 
    }
  }
}

let bubbles = [];

function setup() {
  var canvas = createCanvas(windowHeight, windowWidth);
  canvas.parent('canvas-parent');
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(51,153,255);
  background(147, 204, 228);
  // background(170, 209, 226);
  bubbles = bubbles.filter(bubble => {
    bubble.drawBubble()
    if(!bubble.pop) {
      return bubble; 
    }
  });
  bubbler();
}

function bubbler() {
  const decider = Math.random()*100;
  
  if(decider > 90) {
    const x = Math.floor(Math.random()*width);
    // const y = Math.floor(Math.random()*height);
    const size = Math.floor(Math.random()*(45 - 10) + 15);
    const y = height + size;
    
    bubbles.push(new Bubble(x, y, size)) 
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}