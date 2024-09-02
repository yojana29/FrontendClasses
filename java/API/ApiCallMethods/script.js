
const Base_Url = "https://jsonplaceholder.typicode.com";
// let id = 1;

//get data from api
fetch(`${Base_Url}/posts`).then((res)=>{
    return res.json();
}).then((post)=>{
    console.log(post);
}).catch((err)=>{
    console.log("Error occured",err);
});

//post data in api

let postData = {
    title:"This is our title",
    body:"Let's write something about our title",
    UserId:10
};
//axios


async function addPost(){
    let response = await fetch(`${Base_Url}/posts`,{
        method:"POST",
        body:JSON.stringify(postData),
        headers:{
            'content-type':'application/json;charset=UTF-8'
        },
    });
    // console.log(response);
    if(!response.ok){
        console.log("Error");
    }
    console.log(await response.json());
}

addPost();

//UPDATE
//put:complete update
//patch:partial update

let upId = 5;

async function updatePost(){
    let response = await fetch(`${Base_Url}/posts/${upId}`,
        {
        method: "PATCH",
        body : JSON.stringify({
            "title":"updated title",
            userId:10,
        }),
        headers:{
            'content-type':'application/json'
        },
    });

    if(!response.ok){
        console.log("error",response?.status);
    }
    console.log(await response.json());
    
};

updatePost();

//DELETE post


let delId = 3;

async function deletePost(){
    let response = fetch(`${Base_Url}/posts/${delId}`,
        {
            method:"DELETE",
        });
        if(response.ok){
            console.log((await response).json());
        }
        console.log("error occured");
};
deletePost();