const inputArea = document.querySelector("#insert");
const wordCount = document.querySelector(".word");
const character = document.querySelector(".character");

inputArea.oninput = ()=>{
    //character count
    character.textContent = inputArea.value.length;


    //word count
   let words = inputArea.value.split(" ").filter((item)=>{
    return item !='';
   });
//    console.log(words);

   wordCount.textContent = words.length;
    
};