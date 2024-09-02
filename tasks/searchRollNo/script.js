let container = document.querySelector(".container");
let inputField = document.querySelector("#search");
// console.log(students);
let students = ["THA079BEI007",
    "THA079BEI008",
    "THA079BEI009",
    "THA079BEI019",
    "THA079BEI023",
    "THA079BEI067",
    "THA079BEI045",
    "THA079BEI017",
    "THA079BEI012",
    "THA079BEI003",
    "THA079BEI090",
    "THA079BEI037",
    "THA079BEI028",
    "THA079BEI072",
    "THA079BEI034",
    "THA079BEI045",
    "THA079BEI016"];


function updateDisplay(students){
    let result = ` `;
    container.innerHTML = result;
    if(students.length<1){
        container.innerHTML = "Roll No. not found!";
    }else{
        for(let i of students){
            result += `<p>${i}</p>`;
        }
        container.innerHTML = result;
    }
}
updateDisplay(students);

inputField.addEventListener("input",function(){
    let roll = inputField.value;
    if(roll){
    let filteredRoll = students.filter((student)=>
         student.toLocaleLowerCase().includes(roll.toLowerCase())
    );
    updateDisplay(filteredRoll);
    }
    else{
        updateDisplay(students);
    }
});