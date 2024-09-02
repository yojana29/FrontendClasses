let inputField = document.querySelector("#name");
let resultDiv = document.querySelector("#result");

let students = ["Ramesh","Suresh","Aakash","Prakash","Piyush"];

function display(students){
    let result = ` `;
    resultDiv.innerHTML=result;
    for(let i of students){
        result +=`<p>${i}</p>`;
    }
    resultDiv.innerHTML = result;
}
display(students);

function filterStudent(students){
    let query;
    inputField.addEventListener("input",function(){
        query = this.value;

        let filteredStudent=students.filter((student)=>
        student.toLowerCase().includes(query)); 
         console.log(filteredStudent);
        display(filteredStudent);
    });
};
filterStudent(students);