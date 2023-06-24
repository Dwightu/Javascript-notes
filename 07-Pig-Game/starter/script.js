'use strict';


// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let time = 3;

btnNew.addEventListener('click', () => {
    score0El.textContent='0';
    score1El.textContent='0';
    current0El.textContent='0';
    current1El.textContent = '0';
})


btnRoll.addEventListener('click', ()=>{
    if(time>0){
        time--;
        const dice = Math.trunc(Math.random() * 6) + 1;
        document.querySelector('.player--active .current-score').textContent=dice;
    }else{
        time=3;
        document.querySelector('.player--active .score').textContent=Number(document.querySelector('.player--active .current-score').textContent)+Number(document.querySelector('.player--active .score').textContent);
        current0El.textContent=0;
        current1El.textContent=0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
})


btnHold.addEventListener('click',()=>{
    time=3;
    document.querySelector('.player--active .score').textContent=Number(document.querySelector('.player--active .current-score').textContent)+Number(document.querySelector('.player--active .score').textContent);
    current0El.textContent=0;
    current1El.textContent=0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
})