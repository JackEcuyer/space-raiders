class Player {

  //initialising variables
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  update(mouseX) {
    //checks that the mouse is on the canvas before updating
    if (mouseX < width - 60 && mouseX > 0 + 40) {
      this.x = mouseX;
    }
  }

  show() {
    strokeWeight(2);
    stroke(255);
    fill(this.color);
    //rect(this.x, this.y, 70, 70);
    image(playerImg, this.x, this.y, 72, 64)
  }

  //loops through every enemy on the screen and checks if the enemy has entered the coordinate boundary of the player and if so removes the enemy from the screen and returns true for taking away a player life.
  collisionCheck(enemies) {

    for (var i = 0; i < enemies.length; i++) {
      if ((this.x + 35 >= enemies[i].x && this.x + 35 <= enemies[i].x + 60) && (this.y >= enemies[i].y && this.y <= enemies[i].y + 60)) {
        enemies.splice(i, 1);
        return true;
      }
    }
  }
}