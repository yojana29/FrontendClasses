const inputs = document.querySelector(".inputs"),
hint = document.querySelector(".hint span"),
guessLeft = document.querySelector(".guess-left span"),
wrongLetter = document.querySelector(".wrong-letter span"),
resetBtn = document.querySelector(".reset-btn"),
typingInput = document.querySelector(".typing-input"),
message = document.querySelector(".message");

let word,incorrects = [],maxGuesses;
function randomWord(){
    //getting random object from wordlist
    let ranObj = wordList[Math.floor(Math.random()*wordList.length)];
    // console.log(ranObj);
     word = ranObj.word;
     maxGuesses =10;incorrects = []; 
    console.log(word);

    hint.innerHTML = ranObj.hint;
    guessLeft.innerHTML = maxGuesses;

    let html = "";
    for(let i = 0; i < word.length; i++){
        html+= `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;

}
randomWord();

function initGame(e){
    let key = e.target.value;
    let check = key.charCodeAt(0);
    if((check >= 65 && check <= 90) || (check >= 97 && check <= 122)){
        // console.log(key);
        if(word.includes(key)){
            // console.log("letter found");
            for(let i =0; i<word.length;i++){
                if(word[i] === key){
                     inputs.querySelectorAll("input")[i].value = key; 
                }
            }
        }
        else{
            // console.log("letter not found");
            maxGuesses--;
            incorrects.push(`${key}`);
        }
        guessLeft.innerHTML = maxGuesses;
        wrongLetter.innerHTML = incorrects; 
    }

    // typingInput.value = "";

    if(maxGuesses < 1){
        alert("sorry! you don't have remaining guesses ");
        for(let i = 0;i<word.length;i++){
            inputs.querySelectorAll("input")[i].value=word[i];
        }
    }

}
resetBtn.addEventListener("click",randomWord);
typingInput.addEventListener("input",initGame);
document.addEventListener("keydown",()=>typingInput.focus());