const addBtn = document.querySelector("#btn");
// console.log(addBtn);
let form = document.getElementById("form");
// console.log(form);
let inputName = document.querySelector("#name");
let inputAddress = document.querySelector("#address");
let submitBtn = document.querySelector("#submit");
// console.log(inputName);
let container = document.querySelector("#result");
 let inputField = document.getElementsByTagName("input");
//  console.log(inputField);

function submitData(event){
    event.preventDefault();
    let result = '';
    let resultAddress = '';
    container.classList.remove("hidden");
    form.classList.add("hidden");
    addBtn.style.display="block";
    let Name = inputName.value;
    let Address = inputAddress.value;

    let newEntry = document.createElement("div") ;
    newEntry.innerHTML = `
    <div class = "border p-2 mt-2">
    <strong>Name:</strong>${Name}<br>
    <strong>Address:<strong>${Address}
    </div>
    `;
    container.appendChild(newEntry);
    

    for(let i=0;i<inputField.length-1;i++){
        inputField[i].value = '';
    }
}
submitBtn.addEventListener("click",submitData);

addBtn.addEventListener("click",()=>{
    container.classList.add("hidden");
    addBtn.style.display="none";
    form.classList.remove("hidden");
   
    
});

 
