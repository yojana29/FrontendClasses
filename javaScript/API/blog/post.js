// let urlParams = new URLSearchParams(window.location.search);
// let id = urlParams.get("id");
// console.log(Number(id));

window.addEventListener("DOMContentLoaded",function(){
    let id = localStorage.getItem("id");
    let post_container = document.querySelector(".post-container");

    console.log(id);
    let Base_Url = "https://jsonplaceholder.typicode.com";

    fetch(`${Base_Url}/posts/${id}`)
    .then((res)=>res.json())
    .then((post)=>{
        displayPost(post);
    });


    function displayPost(post){
        let postDiv = document.createElement("div");
        postDiv.classList.add("post");

        let h1 = document.createElement("h1");
        h1.innerText = post.title;

        let p = document.createElement("p");
        let newBody = post.body.replaceAll("\n","");
        p.innerText = newBody;

        postDiv.append(h1,p);
        post_container.append(postDiv);
    }
})