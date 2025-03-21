const prompt =require("prompt-sync")();
//questiion 1
let myName="Yojana";
console.log(myName);
//Calculate area
let breadth,length,area;
length=prompt("Enter the length of rectangle:");
breadth=prompt("Enter the breadthof rectangle:");
area=length*breadth;
console.log("The area of rectangle is:",area);
//concatination of string
let firstName="Yojana",
lastName="Pandey";
console.log(firstName+" "+lastName);
//question 3
let age=prompt("Enter your age:");
age=Number(age);
if(age>=18)
    {
        console.log("You can vote");
     }
else{
        console.log("You are not elligible for voting");
    }
//compare two numbers
let a,b;
a=prompt("Enter the first number:");
b=prompt("Enter the second number:");
if(a==b){
    console.log("The number are equal");}
else if(a>b){
    console.log(a,"is greater than",b);}
else 
 {
    console.log(b,"is greater than",a);
}




 