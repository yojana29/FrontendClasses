const prompt =require("prompt-sync")();
//age verification
let age=prompt("Enter your age:");
if(age>=13 && age<=19){
    console.log("you are an teenager");
}
else{
    console.log("you are not teenage");
}



//multiplication table
let a,i;
a=prompt("Enter the number:");
for(i=1;i<=10;i++)
    {
        console.log(a+"*"+i+"="+a*i);
    }







