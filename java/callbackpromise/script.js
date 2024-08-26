// function sum(a,b){
//     console.log(a+b);
// }
function calculateSum(a,b,func){
    console.log("The sum is:");
    func(a,b);
};
// calculateSum(2,3,sum);
// calculateSum(5,4,(a,b)=>{
//     console.log(a+b);
// });
 function getName(Name,Job){
    console.log("kritika,engineer");
 };
 
 function getDetail(callback){
    console.log("Lets start:");
    callback();
 };
//  getDetail(getName);

// setTimeout(()=>{
//     console.log("Hello");
// },3000);

function getData(id,getNextData){
    setTimeout(()=>{
        console.log("data",id);
        if(getNextData){
            getNextData();
        }
    },2000);
}
// getData(2,getData(3));

//callback hell
// getData(1,()=>{
//     console.log("getting data2....");
//     getData(2,()=>{
//         console.log("getting data3........");
//         getData(3,()=>{
//             console.log("getting data4...");
//             getData(4);
//         });
//     });
// });

//Promise
const myFunc = ()=>{
    //...... 
} 

// let promise = new Promise(myFunc);
// let promise = new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             console.log("I promise you.");
//             // resolve("successfull!");
//             reject("failed");
//         },3000);
// });
// console.log(promise);

// pseudo api
function fetchData(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(id === 101){
                resolve({name:"Harish",age:20});
            }else{
                reject( {error:"Not found"});
            }
        },2000);
    });
}
//API call
// let data = fetchData(101);
// console.log(data);
// data 
// .then((result)=>{
//     console.log("Fulfilled");
//     console.log(result);
// })
// .catch ((error)=>{
//     console.log("Rejected");
//     console.log(error);
// });

fetchData(101).then((result)=>{
    console.log(result);
    fetchData(102).then(()=>{
        console.log(result);
        });
    });   






