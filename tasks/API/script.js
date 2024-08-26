
const container = document.querySelector(".container");
//fetch url
const BaseUrl = "https://restcountries.com/v3.1/all";

fetch(BaseUrl).then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
    displayCountries(data);
    
}).catch((err)=>{
    console.log("error occured",err);
});
function displayCountries(data){

    for(let i = 0;i<data.length;i++){
        // console.log(data);
        let countryDiv = document.createElement("div");
        countryDiv.classList.add("country");

        countryDiv.innerHTML=`
        <div>
        <p>${data[i].name.common}</p>
        <p>${data[i].flag}</p>
        <p>${data[i].capital}</p>
        <p>${data[i].continents}</p>
        </div>
        `

        container.append(countryDiv);
    }



}

