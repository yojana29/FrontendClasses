    
let Base_Url = "https://jsonplaceholder.typicode.com";
let post_container = document.querySelector(".post-container");

//Get Posts and display
fetch(`${Base_Url}/posts`)
.then((res)=>res.json())
.then((posts)=>{
    // console.log(posts);
    posts.forEach(post=>{
        // console.log(post);
        displayPost(post);
    });
});
//Display Function
function displayPost(post){
    let postDiv = document.createElement("div");
    postDiv.classList.add("post");

    let h1 = document.createElement("h1");
    h1.innerText = post.title;

    let p = document.createElement("p");
    let newBody = post.body.replaceAll("\n","");
    p.innerText = newBody;

    //creatin delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");

    //delete function
    deleteBtn.addEventListener("click",function(){
        let id = postDiv.getAttributeNS("id");

         fetch(`${Base_Url}/posts/${id}`,{
            method:"Delete",
         }).then((res)=>{
            postDiv.remove(res);
         })
         .catch((err)=>{
            console.log(err);
         });

    });

    postDiv.append(h1,p,deleteBtn);
    
    h1.addEventListener("click",function(){
        // window.location.href = `post.html?id=${post.id}`;
        localStorage.setItem("id",post.id);
        window.location.href = `post.html`;
    });

    post_container.append(postDiv);
}