
//fetch url
const BaseUrl = "https://restcountries.com/v3.1/all";

fetch(BaseUrl).then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("error occured",err);
});