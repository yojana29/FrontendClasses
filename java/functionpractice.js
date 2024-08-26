const prompt=require("prompt-sync")();
//check even numbers
let n=prompt("Enter the Number");
function even(n){
    if(n%2==0){
        console.log(n,"is even number");
    }
    else{
        console.log(n,"is not even number");
    }
}
even(n);

//Maximum Number
let maxNumber=function(a,b)
{
    if(a>b){
        console.log(a,"is maximum number");
    }
    else{
        console.log(b,"is greater number");
    }
}
maxNumber(3,4);

//number is zero or positive or negative
let checkNumber=(a)=>{
    if(a>0){
        console.log(a,"is positive number");
    }
    else if(a<0)
        {
            console.log(a,"is negative number");
        }
        else {
            console.log(a,"is zero");
        }
}
checkNumber(4);
//calculating power of a number
function power(num,pow){
    result=num**pow;
    return result;
}
console.log(power(2,3));

//calculate simple interest
let calculateInterest=(P,T,R)=>(P*T*R)/100
console.log("The simple interest is ",calculateInterest(5000,4,1));

//calculate distance between two points
function calculateDistance(x1,y1){
    return function(x2,y2){
        return((x2-x1)+(y2-y1))**1/2;
    }
}
console.log("Distance is",calculateDistance(3,4)(5,6));