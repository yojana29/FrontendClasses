let button = document.querySelectorAll("input[type='button']:not(.special");
let question = document.querySelector("#qn");
let answer = document.querySelector("#ans");

// console.log(button);

button.forEach((btn)=>{
    btn.addEventListener("click",function(){
        // console.log(this.value);

        question.value += this.value;
    });
});
function calculate(){
    // let ans = eval(question.value);
    // answer.value = ans;
    let qn =  question.value;
    console.log(qn);
    qn= qn.replace("^","**");
    qn = qn.replace("√","Math.sqrt");
    console.log(qn);
    let ans = eval(qn);
    answer.value = ans;
}
function ac(){
    answer.value="";
    question.value="";

}
function del(){
    let str = question.value;
    let remaining=str.slice(0,str.length-1);
    // console.log(remaining);
    question.value=remaining;
}