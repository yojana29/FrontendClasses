// console.dir(document.body.firstChild);//text
// console.dir(document.body.firstElementChild);//div.container

//selectors

//Using id
//return html element
let paragraph = document.getElementById("para");
// console.log(paragraph);

//using className
//return html collection

let container=document.getElementsByClassName("container");
// console.log(container);
// console.log(container[0]);

//using tagName
//HTML Collection(collection of elements)
let allDiv = document.getElementsByTagName("div");
// console.log(allDiv);
// console.log(allDiv[3]);

//using name
//return nodelist(collections of nodes)
let emailInput=document.getElementsByName("Email");
// console.log(emailInput);

let nameInput = document.getElementsByName("Name");
// console.log(nameInput);

//query selector
//return only 1 element
//used like css inside bracket
let para2 = document.querySelector("#para");
let container2 = document.querySelector(".container");

// console.log(para2);
// console.log(container2);

//query selector all
//Nodelist 
let allContainers = document.querySelectorAll(".container, div");
// console.log(allContainers);


//traversing
//select grandParent
// let grandParent = document.getElementsByClassName("grandParent");
let grandParent = document.querySelector(".grandParent");
// console.log(grandParent);
let childNodes = grandParent.childNodes;
//childNode returns all nodes i.e nodelist
let childElements = grandParent.children;
//children returns html collection i.e html element
// console.log(childNodes);
// console.log(childElements);

//ParentNode
let father = document.querySelector(".father");
let myParent = father.parentNode;
// console.log(myParent);
let son = document.querySelector(".son");
let myChild = son.parentNode;
// console.log(myChild);

//nextElementSibling

let daughterUsingSon = son.nextElementSibling;
console.log(daughterUsingSon);
