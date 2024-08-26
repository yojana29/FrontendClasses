let button = document.querySelector("#btn");
// console.log(btn);
button.addEventListener("click",function(){
    // console.log(button);
    console.log(this);//element whicch got the event
});