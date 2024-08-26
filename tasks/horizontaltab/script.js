let react = document.querySelector(".title1");
let one = document.querySelector(".one");
let vue = document.querySelector(".title2");
let two = document.querySelector(".two");
let angular = document.querySelector(".title3");
let three = document.querySelector(".three");

react.classList.add("styled");
react.addEventListener("click",function(){
    one.style.display="block";
    two.style.display="none";
    three.style.display="none";
    react.classList.add("styled");
    vue.classList.remove("styled");
    angular.classList.remove("styled");
});
vue.addEventListener("click",function(){
    two.style.display="block";
    one.style.display="none";
    three.style.display="none";
    vue.classList.add("styled");
    react.classList.remove("styled");
    angular.classList.remove("styled");
});
angular.addEventListener("click",function(){
    three.style.display="block";
    one.style.display="none";
    two.style.display="none";
    angular.classList.add("styled");
    vue.classList.remove("styled");
    react.classList.remove("styled");
});

