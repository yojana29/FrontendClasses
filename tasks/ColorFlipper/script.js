body=document.body;
btn = document.querySelector(".btn");


const Clicked = () => {
    r = Math.floor(Math.random()*255).toString(16).padStart(2,"0");
    g = Math.floor(Math.random()*255).toString(16).padStart(2,"0");
    b = Math.floor(Math.random()*255).toString(16).padStart(2,"0");
    color = `#${r}${g}${b}`;
    body.style.backgroundColor = color;
    return ;
}
btn.addEventListener("click",Clicked);

