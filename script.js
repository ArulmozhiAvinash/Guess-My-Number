'use strict';

let randomNumber = Math.floor(Math.random() * Math.floor(19)) + 1;
let checkButton = document.getElementById('check')
let againButton = document.getElementById('again')
let score = document.getElementById('score').innerText
let highScore = document.getElementById('highScore')
let message = document.getElementById('message')

againButton.addEventListener('click', () =>{
    randomNumber = Math.floor(Math.random() * Math.floor(19)) + 1;
    document.getElementById('score').innerText = 20;
    score = 20;
    message.innerText = 'Start guessing...';
    checkButton.classList.remove('disable');
    checkButton.disabled = false;
    document.getElementById('guess').value = '';
    document.getElementById('body').classList.remove('success');
})

checkButton.addEventListener('click', () =>{
    console.log(randomNumber);
    let enteredNumber = document.getElementById('guess').value;

    if(enteredNumber == undefined || isNaN(enteredNumber)) {
        message.innerText = 'Enter a valid number!!!';
    }
    if(enteredNumber < randomNumber){
        message.innerText = 'Entered number is low!!!';
        score--;
    }else if(enteredNumber > randomNumber){
        message.innerText = 'Entered number is high!!!';
        score--;
    }else{
        message.innerText = `Hurry you gussed the ${randomNumber} right number!!!`;
        checkButton.classList.add('disable');
        checkButton.disabled = true
        document.getElementById('body').classList.add('success');
        if(score>highScore.innerText){
            highScore.innerText = score;
        }
    }
    document.getElementById('score').innerText = score
})
