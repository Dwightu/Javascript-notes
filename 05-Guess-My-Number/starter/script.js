'use strict';

const secret = Math.floor(Math.random() * 20) + 1;
let maxScore = 0;
let currentScore = 20;

const displayMessage = text => {
    document.querySelector('.message').textContent = text;
};

const changeBodyColor = color => {
    document.querySelector('body').style.backgroundColor = color;
};

const displayCurrentScore = score => {
    document.querySelector('.score').textContent = score;
};

const changeHighScore = () => {
    if (currentScore > maxScore) {
        maxScore = currentScore;
        document.querySelector('.highscore').textContent = maxScore;
    }
}

document.querySelector('.check').addEventListener('click', () => {
    console.log(secret);
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage('No number');
    } else if (guess < secret) {
        displayMessage('Too low');
        changeBodyColor('#222');
        currentScore--;
        displayCurrentScore(currentScore);
    } else if (guess > secret) {
        displayMessage('Too high');
        changeBodyColor('#222');
        currentScore--;
        displayCurrentScore(currentScore);
    } else if (guess == secret) {
        displayMessage('You win!!!! Click again to restart');
        changeBodyColor('green');
        changeHighScore();
    }
});

document.querySelector('.again').addEventListener('click', () => {
    changeBodyColor('#222');
    displayMessage('Start guessing...');
    currentScore = 20;
    displayCurrentScore(currentScore);
    document.querySelector('.guess').value = '';
})