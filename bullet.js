class Bullet {

  //initialising variables
  constructor(x, y, color = 255) {
    this.x = x;
    this.y = y;
    this.speed = 25;
    this.color = color;
    this.count = 0
  }

  update() {
    this.y -= this.speed;
    this.count++;
  }

  show() {
    fill(this.color);

    if (this.count < 10) {
      tint(255, 0, 0);
    }
    image(laserImg, this.x, this.y, 10, 30);
    tint('none');
  }

  collisionCheck(enemies) {

    //loops through every enemy and checks if they are in the same coordinate boundaries as the bullet and if they are removes them from the screen
    for (var i = 0; i < enemies.length; i++) {

      if ((this.x >= enemies[i].x && this.x <= enemies[i].x + 74) && (this.y >= enemies[i].y && this.y <= enemies[i].y + 57)) {
        enemies.splice(i, 1);
        return true;
      }
    }


  }
}