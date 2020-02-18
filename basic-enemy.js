class basicEnemy {

  //initialising variables
  constructor(x, y, color = 'red') {
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.color = color;
    this.count = 0;
  }

  update() {
    this.y += this.speed;
    this.count += 1

    //randomly moves the enemys x every 10 frames
    // internal if statements ensure the enemy does not go off the screen
    if (this.count % 10 < 2) {
      if (this.x >= 64 && this.x <= width - 64){
        this.x += random(-32, 32);}
      else if(this.x < 64){
        this.x += random(0,32);
      }
      else if(this.x > width - 64){
        this.x += random(0,-32);
      }
    }

  }

  show(frameCount) {
    fill(this.color);
    stroke(255);
    strokeWeight(2);

    // calls the enemy animation to change every few frames.
    if (frameCount % 60 < 7) {
      image(enemySpriteSheet, this.x, this.y, 74, 57, 130, 0, 130, 100)
    }
    else {
      image(enemySpriteSheet, this.x, this.y, 74, 57, 0, 0, 130, 100)
    }
  }
}