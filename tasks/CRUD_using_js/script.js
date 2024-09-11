const addBtn = document.querySelector("#add");
let form = document.querySelector("#form");
let nameElement = document.querySelector("#name");
let emailElement = document.querySelector("#email");
let userDiv = document.querySelector(".users");

document.body.addEventListener("click",function(e){
    if(e.target.id == "add"){
        form.classList.toogle("hidden");
        userDiv.style.display = "none";
        localStorage.setItem("formType","addForm");
    }
    if(e.target.id == "submit"){
        e.preventDefault();
        submitForm();
    }

});

userDiv.addEventListener("click",function(e){
    if(e.target.id == "delete"){
        let userDiv = e.target.closest(".user");
        userDiv.removeChild(userDiv);
    }
})








