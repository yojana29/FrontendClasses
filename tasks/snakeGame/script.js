const boardElement = document.querySelector(".board");
const scoreElement = document.querySelector(".score");
const HighScoreElement = document.querySelector(".high-score");
const playPauseBtn = document.querySelector(".play-pause");


// scores
let scores = {
    score: 0,
    highScore: localStorage.getItem("high-score") || 0,
};

HighScoreElement.innerHTML = `🏆 : ${scores.highScore}`;



//food
let food = getRandomPosition();
//Snake
let snakeHead = getRandomPosition();
let snakeBody = [];

function getRandomPosition() {
    return {
        x: Math.floor(Math.random() * 30) + 1,
        y: Math.floor(Math.random() * 30) + 1,
    }
}

let intervalId;
function startGame() {
    intervalId = setInterval(gameLoop, 150);
}
startGame();

function gameLoop() {
    moveSnake();
    updateBoard();
}

let directionX = 0;
let directionY = 0;
function moveSnake() {
    //move head based on direction
    snakeHead.x += directionX;
    snakeHead.y += directionY;


    //snake movement
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    // new coordinates of snakeBody[0] should be of head
    snakeBody[0] = { y: snakeHead.y, x: snakeHead.x };

    for (let i = 4; i < snakeBody.length; i++) {
        if (snakeBody[i].x == snakeHead.x && snakeBody[i].y == snakeHead.y) {
            gameOver();
        }
    }
}

    function updateBoard() {
        let html = `<div class="food" style="grid-area: ${food.x}/${food.y}"></div>`
        html += `<div class="head" style="grid-area: ${snakeHead.x}/${snakeHead.y}"></div>`

        // isFoodEaten();
        // isGameOver();

        snakeBody.forEach((part) => {
            html += `<div class="head" style="grid-area: ${part.y}/${part.x}"></div>`

        });
        boardElement.innerHTML = html;


    }

    function startListeningKeyUpEvents() {
        window.addEventListener("keyup", handleDirectionChange);
    }
    startListeningKeyUpEvents();

    function stopListeningToKeyUpEvents() {
        window.removeEventListener("keyup", handleDirectionChange);
    }

    function handleDirectionChange(e) {
        switch (e.key) {
            case "ArrowUp":
                if (directionY !== 1) {
                    directionX = 0;
                    directionY = -1;
                }
                break;

            case "ArrowDown":
                if (directionY !== -1) {
                    directionX = 0;
                    directionY = 1;
                }
                break;

            case "ArrowLeft":
                if (directionX !== 1) {
                    directionX = -1;
                    directionY = 0;
                }
                break;

            case "ArrowRight":
                if (directionX !== -1) {
                    directionX = 1;
                    directionY = 0;
                }
                break;
        }
    }

    function isFoodEaten() {
        if (snakeHead.x == food.x && snakeHead.y == food.y) {
            updateScores();
            addSnakeBody();
            updateFoodLocation();
        }
    }

    function addSnakeBody() {
        snakeBody.push({ ...food });
        console.log(snakeBody);
    }

    function updateScores() {
        scores.score++;

        if (scores.score > scores.highScore) {
            scores.highScore = scores.score;
        }
        ScoreElement.innerHTML = `🍎 : ${scores.score}`;
        HighScoreElement.innerHTML = `🏆 : ${scores.highScore}`;
    }

    function updateFoodLocation() {
        food = getRandomPosition();
    }

    function isGameOver() {
        if (
            snakeHead.x < 1 ||
            snakeHead.x > 30 ||
            snakeHead.y < 1 ||
            snakeHead.y > 30
        ) {
            gameOver();
        }
    }

    function gameOver() {
        clearInterval(intervalId);
        alert(`You ate ${scores.score} 🍎`);
        localStorage.setItem("high-score", scores.highScore);
        location.reload();
    }

    playPauseBtn.addEventListener("click", function () {
        if (this.classList.contains("fa-pause")) {
            this.classList.remove("fa-pause");
            this.classList.add("fa-play");
            clearInterval(intervalId);
            stopListeningToKeyUpEvents();
        } else {
            this.classList.remove("fa-play");
            this.classList.add("fa-pause");
            startGame();
            startListeningKeyUpEvents();
        }
    });
