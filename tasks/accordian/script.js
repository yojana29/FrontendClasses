let allBoxes = document.querySelectorAll(".box");
// console.log(allBoxes);

allBoxes.forEach((box) => {
    // console.log(box);
    box.addEventListener("click",function(){
        // let answer = box.lastElementChild;
        // answer.style.display = "block";
        let question = box.firstElementChild;
        question.classList.toggle("active");
    });
});