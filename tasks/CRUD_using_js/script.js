const addBtn = document.querySelector("#add");
let form = document.querySelector("#form");
let nameElement = document.querySelector("#name");
let emailElement = document.querySelector("#email");
let userDiv = document.querySelector(".users");

document.body.addEventListener("click", function (e) {
    if (e.target.id == "add") {
        form.classList.toogle("hidden");
        userDiv.style.display = "none";
        localStorage.setItem("formType", "addForm");
    }
    if (e.target.id == "submit") {
        e.preventDefault();
        submitForm();
    }

});

userDiv.addEventListener("click", function (e) {
    if (e.target.id == "delete") {
        let userDiv = e.target.closest(".user");
        userDiv.removeChild(userDiv);
    }
    if (e.target.id == "edit") {
        form.classList.toggle("hidden");
        userDiv.style.display = "none";
        localStorage.setItem("formType", "editForm");
        let userDiv = e.target.closest(".user");

        nameElem.value = userDiv.querySelector(".user-name").textContent;
        emailElem.value = userDiv.querySelector(".user-email").textContent;

        localStorage.setItem("editUserId", userDiv.dataset.id);
        localStorage.setItem("formType", "editForm");
    }
});

function submitForm() {
    let type = localStorage.getItem("formType");
    let name = nameElem.value;
    let email = emailElem.value;
  
    if (type == "addForm") {
      let userId = Date.now().toString();
      let user = createUserHTML(userId, name, email);
      usersDiv.innerHTML += user;
    }
  
    if (type == "editForm") {
      let userId = localStorage.getItem("editUserId");
      let userDiv = document.querySelector(`.user[data-id="${userId}"]`);
      userDiv.querySelector(".user-name").textContent = name;
      userDiv.querySelector(".user-email").textContent = email;
    }
  
    form.classList.toggle("hidden");
    usersDiv.style.display = "grid";
  }

  function createUserHTML(id, name, email) {
    return `
      <div class="user" data-id="${id}">
        <div>
          <p class="user-name">${name}</p>
          <p class="user-email">${email}</p>
        </div>
        <div>
          <p><i class="fa-regular fa-pen-to-square" id="edit"></i></p>
          <p><i class="fa-regular fa-trash-can" id="delete"></i></p>
        </div>
      </div>
    `;
  }








