
const container = document.querySelector(".container");
let search = document.querySelector("#enter");
const filter = document.querySelector("#filter");
cross = document.querySelector("#cross");


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

//display data
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

//search data

search.addEventListener("input",function(){
    const value = this.value;
    // console.log(value);
    let searchUrl=`https://restcountries.com/v3.1/name/${value}`;

  

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

//clear search

cross.addEventListener("click",()=>{

    search.value = "";
    const BaseUrl = "https://restcountries.com/v3.1/all";

fetch(BaseUrl).then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
    displayCountries(data);
    
}).catch((err)=>{
    console.log("error occured",err);
});
})


//filtering
filter.addEventListener("change",()=>{
    region = filter.value;
     let filterUrl = `https://restcountries.com/v3.1/region/${region}`;

    if (region === "All") {
        // If select by Region is selected or if you want to show all countries
        filterUrl = "https://restcountries.com/v3.1/all";
    } else {
        // If a specific region is selected
        filterUrl = `https://restcountries.com/v3.1/region/${region}`;
    }

    fetch(filterUrl).then(res=>{
       return res.json();
    }).then(area=>{
        console.log(area);
        displayCountries(area);
    }).catch(error=>{
        console.log(error.message);
    });
});

