
const container = document.querySelector(".container");
const search = document.querySelector("#enter");
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
    
    container.innerHTML = '';

    for(let i = 0;i<data.length;i++){
        // console.log(data);
        let countryDiv = document.createElement("div");
        countryDiv.classList.add("country");

        countryDiv.innerHTML=`
        <div>
        <img src=${data[i].flags.png} alt="${data[i].flags.alt}">
        <p>Name:${data[i].name.common}</p>
        <p>Capital:${data[i].capital}</p>
        <p>Continent:${data[i].continents}</p>
        <p>Population:${data[i].population}</p>
        </div>
        `

        container.append(countryDiv);
    }
}


search.addEventListener("input",function(){
    const value = this.value;
    // console.log(value);
    const searchUrl = `https://restcountries.com/v3.1/name/${value}`;

    fetch(searchUrl).then((res)=>{
       return res.json();
    }).then(country => {
        console.log(country);
        displayCountries(country);
    }).
catch(error=>{
    console.log("error occurred",error.message);
});
   
});

