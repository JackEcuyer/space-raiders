//this script will have graphical setups for the different scenes in the game.

function mainMenu() {

  background(0);
  textAlign(CENTER);
  textSize(65);
  stroke('white');
  fill('black');
  strokeWeight(3);
  text('Space Raiders', width / 2, playGameButton.y - 80);
  strokeWeight(1);
  playGameButton.render();
  controlsButton.render();

}

function mainGame() {

  if(playerLives == 0){
    location.reload();
  }

  playerScore = Math.trunc(frameCount / 20) + (playerKills * 3);

  background(bg);

  //draws the players onto the screen, updates the players coordinates and calls the collision check with enemies.
  player.show();
  player.update(mouseX);
  if (player.collisionCheck(enemies) == true) {
    playerLives = playerLives - 1;
  };

  // setting up health bar.
  stroke('white');
  fill('yellow');
  textSize(32);
  text('❤️'.repeat(playerLives), 10, 50);
  text('Kills: ' + playerKills, windowWidth / 1.15, 50);
  text('Score : ' + playerScore, windowWidth / 1.15, 100);
  text('Framerate: ' + Math.trunc(frameRate()), 10, 100);

  //checks how many enemies are on the screen and adds more depending on the amount
  if (enemies.length < 10) {
    //gives a chance for harder enemies to spawn
    if (random(1, 8) < 7) {
      enemies.push(new basicEnemy(random(32, width - 32), random(0, height / 7)));
    }
    else {
      enemies.push(new bigEnemy(random(32, width - 32), random(0, height / 7)));
    }
  }

  //draws bullets shot from the player on the canvas
  for (var i = 0; i < bullets.length; i++) {

    //checks if the bullet has hit an enemy and if so removes the enemy and the bullet
    if (bullets[i].collisionCheck(enemies) == true) {
      bullets.splice(i, 1);
      playerKills += 1;
    }
    else if (bullets[i].y < 0) {
      bullets.splice(i, 1);
    }
    else {
      bullets[i].show();
      bullets[i].update();
    }
  }

  //draws enemies on the canvas
  for (var i = 0; i < enemies.length; i++) {

    //removes enemies if they are no longer visible
    if (enemies[i].y > height) {
      enemies.splice(i, 1);
      playerLives = playerLives - 1;
      textSize(40);
      text('-❤️', player.x, player.y)

    }

    else {
      enemies[i].show(frameCount);
      enemies[i].update();
    }
  }
}