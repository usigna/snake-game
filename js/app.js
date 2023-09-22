const board = document.querySelector('.board');
const score = document.querySelector('.score');
const highScore = document.querySelector('.high-score');
let food;
let snake;
let foodPositionX;
let foodPositionY;
let snakePositionX = 2;
let snakePositionY = 2;
let directionX = 0;
let directionY = 0;

function randomFoodPosition() {
  foodPositionX = Math.floor(Math.random() * 30) + 1;
  foodPositionY = Math.floor(Math.random() * 30) + 1;
}

function createFood() {
  food = document.createElement('div');
  food.classList.add('food');
  randomFoodPosition();
  food.style.gridArea = `${foodPositionX} / ${foodPositionY}`;
  board.appendChild(food);
}

function createSnake() {
  snake = document.createElement('div');
  snake.classList.add('snake');
  snakePositionX += directionX;
  snakePositionY += directionY;
  snake.style.gridArea = `${snakePositionX} / ${snakePositionY}`;
  board.appendChild(snake);
}

function changeDirection(e) {
  switch (e.keyCode) {
    case 37:
      //  console.log('Left key');
       directionX = 0;
       directionY = -1;
    break;
    case 38:
      //  console.log('Up key');
       directionX = -1;
       directionY = 0;
    break;
    case 39:
      //  console.log('Right key');
       directionX = 0;
       directionY = 1;
    break;
    case 40:
      //  console.log('Down key');
       directionX = 1;
       directionY = 0;
    break;
 }

  snake.classList.remove('snake');
  createSnake();
}

function startGame() {
  createFood();
  createSnake();
  document.addEventListener('keydown', changeDirection);
}

startGame();