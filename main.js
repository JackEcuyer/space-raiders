//initialising game variables.
var player, playerLives, playerKills, playerScore;
var bullets = [];
var enemies = [];
var menuButtons = [];
var gameMode = 'mainMenu';
var currentScene = mainMenu;

//load images before starting sketch
function preload() {
  bg = loadImage('space_bg.png')
  enemySpriteSheet = loadImage('enemy-sprite-sheet.gif')
  playerImg = loadImage('player-sprite.png')
  playerImgShooting = loadImage('player-sprite-shooting.png')
  laserImg = loadImage('laser-sprite.png')
  crosshair = loadImage('xhairimg.png')
}

function setup() {

  //creating boundaries for sketch
  createCanvas(windowWidth - 20, windowHeight - 40);
  background(bg);

  //assigning player object and variables.
  player = new Player(width / 2, height - 80, 'lightgreen');
  playerLives = 10;
  playerKills = 0;
  playerScore = 0;

  menuButtons = [

    playGameButton = new Button('Play Game', width / 2, height / 3, 400, 70, () => { gameMode = 'mainGame' }),

    controlsButton = new Button('Controls', width / 2, playGameButton.y + 100, 400, 70)
  ]

  var buttons = menuButtons;
}

function draw() {


  clear();

  buttons = menuButtons;

  switch (gameMode) {
    case 'mainMenu': currentScene = mainMenu;
      break;
    case 'mainGame': 
      currentScene = mainGame;
      buttons = [];
      break;
  }

  currentScene();

  //draws a crosshair where the mouse is
  image(crosshair, mouseX + 10, mouseY, 25, 25);



}

function mousePressed() {
  for (button of buttons) {
    button.clicked();
  }

  if (gameMode = 'mainGame') {
    //adds a bullet if player clicks mouse
    bullets.push(new Bullet(player.x + 33, player.y + 1));
  }
}
