



//food
let food = randomPosition();
//Snake
let snakeHead = randomPosition();
let snakeBody = [];

function randomPosition(){
    return {
        x: Math.floor(Math.random() * 30) + 1,
        y: Math.floor(Math.random() * 30) + 1,
    }
}

let intervalId;
function startGame(){
    intervalId = setInterval(gameLoop,150);
}
startGame();

function gameLoop(){
    moveSnake();
    updateBoard();
}

let directionX = 0;
let directionY = 0;
function moveSnake(){
    //move head based on direction
    snakeHead.x += directionX;
    snakeHead.y +=directionY;


    //snake movement
    for(let i = snakeBody.length-1;i > 0;i--){
        snakeBody[i] = snakeBody[i-1];
    }
}
