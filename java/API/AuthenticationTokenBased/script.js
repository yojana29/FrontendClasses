document.addEventListener("DOMContentLoaded",()=>{
    let BASE_URL = "https://api-v1-ims.gravitylifestyle.com.np";

    //Get the input elements
    const usernameInput = document.querySelector('input[name="uname"]');
    const passWordInput = document.querySelector('input[name="psw"]');

    //Get the form element
    const form = document.querySelector("form");

    //store the values
    let username = " ";
    let password = " ";

    //Event listener for change events

    usernameInput.addEventListener("input",(event)=>{
            username = event.target.value;
            console.log("Username:",username);

    });

    passWordInput.addEventListener("input",(event)=>{
        password = event.target.value;
        console.log("password:",password);
    });

    // Event listener for form submission 

    form.addEventListener('submit',async (event)=>{
        event.preventDefault();

        const loginData = {
            userIdentifier:username,
            password:password
        };

        try{
            const response = await fetch(`${BASE_URL}/api/v1/public/customer-app/customer/login`,
                {
                    method:"POST",
                    body:JSON.stringify(loginData),
                    header:{
                        'content-type':'application/json'
                    },
                })

             if(response.ok){
                const data = await response.json();
                localStorage.setItem("tokens",JSON.stringify(data?.tokens));
                localStorage.setItem("is Authenticated",true);
                console.log("Login Successfull");
                console.table("data",data);

             } 
             else{
                console.error("Login Failed",response);
             }  
        }
        catch (error){
            console.error("Unknown error occured",error);
        }
    });
});