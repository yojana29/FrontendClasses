const prompt =require("prompt-sync")();

//calculate max and min nulmber from array

let array=[15,12, 18 ,4 ,5,3,20,1];
let max=array[0];
let min=array[0];
function calculateMax()
{
    for(let i in array)
        {
            if(max < array[i])
                {
                   max=array[i];
                } 
         }
            return max;
}
function calculateMin()
{
    for(let i in array)
        {
            if(min >array[i])
                {
                    min=array[i];
                    }
                    }
               return min;
    
}

// console.log("The largest number in array is",calculateMax());
// console.log ("The smallest number in array is",calculateMin());

//sum of elements of array
let calculateSum=function(){
    let sum=0;
    for(let i in array)
        {
            sum += array[i];

        }
        return sum;
}
// console.log("The sum of elements of array is",calculateSum());

//calculate sum of even numbers from array
let evenSum=()=>{
    let sum=0;
    for(let i in array )
        {
            if(array[i]%2==0)
                {
                    sum +=array[i];
                }
        }
        return sum;
}
// console.log("The sum of even numbers of array is",evenSum());

//an array that takes students names and print total no. of students

let arr=[];
// result=arr.length;
// console.log(result);
// let n=prompt("no of element you want to enter");
let createArray=function(){
    for(let i=0;i<n;i++){
        arr[i]=prompt("Enter the element you want to enter");
    }
    console.log(arr);
    console.log("The total no of element in array is:",arr.length);
}
// createArray();

//loop that iterates over the numbers array and logs each element to the console

let numbers=[3,5,2,8,9];
function printArray(){
    for(let i=0; i<numbers.length;i++){
        console.log(numbers[i]);
    }
}
// printArray();

//



