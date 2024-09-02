const startBtn = document.querySelector("button"),
container = document.querySelector(".container"),
secondContainer = document.querySelector(".second-container"),
inputs = document.querySelector(".inputs"),
hint = document.querySelector(".hint span"),
remaining = document.querySelector(".guess-left span"),
wrong = document.querySelector(".wrong-letter span"),
reStart = document.querySelector(".details button"),
typingInput = document.querySelector(".enter input");
message = document.querySelector(".messages");





startBtn.addEventListener("click",function(){
    container.style.display = "none";
    secondContainer.style.display = "block";

    let word,incorrect = [],maxGuesses,corrects;
    
    function randomWord(){
        message.innerHTML = "";
        wrong.innerHTML = "";
        corrects = 0;
        maxGuesses = 4;
        //getting random object from wordlist
        let ranObj = wordList[Math.floor(Math.random()*wordList.length)];
        // console.log(ranObj);
         word = ranObj.word;
         console.log(word);

         hint.innerHTML = ranObj.hint;
         remaining.innerHTML = maxGuesses;

         let html = "";
         for(let i = 0;i<word.length;i++){
            html+=`<input type="text" disabled>`;
         }
         inputs.innerHTML = html;

    }

    randomWord();


    function initGame(e)
    {
        let key = e.target.value;//returns entered letter
        let check = key.charCodeAt(0);//returns unicode value of entered letter
        if((check >= 65 && check <=90) || (check >= 97 && check <= 122)){
            // console.log(key);
            if(word.includes(key)){
                // console.log("letter found");
                for(let i =0; i<word.length;i++){
                    if(word[i] === key){
                        corrects++;
                        inputs.querySelectorAll("input")[i].value = key;
                    }
                }

            }
            else{
                // console.log("letter not found");
                 maxGuesses--;
                 incorrect.push(`${key}`);   
            }
            wrong.innerHTML = incorrect;
            remaining.innerHTML = maxGuesses;
            

        }
        setTimeout(function(){
           typingInput.value = '';
       },200);

             if(maxGuesses < 1){
                message.innerHTML="sorry! you are failed to find the word. Restart the game";
                for(let i = 0;i<word.length;i++){
                    inputs.querySelectorAll("input")[i].value=word[i];
                   }
                    typingInput.disabled = true;
               }
     
          if(corrects == word.length){
               message.innerHTML = "Congratulations! You have guesses the word."
              }      
     
         

  };
   

     reStart.addEventListener("click",randomWord);
     typingInput.addEventListener("input",initGame);
     document.addEventListener("keydown",()=>typingInput.focus());

});