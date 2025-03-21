//anything quoted is known as string
//combination of charaters

let _variable="ruuy7834675"
let single='4475574';//single quotes
let double="doble quoted array";//double quotes
let backtick=`hello ${_variable}`;//backtick
let detail = `Name:shyam
RollNo:8
`;// only backtick can be used for multiple line string
console.log(detail);


//string methods
let my_string="today is our string class";
let my_string2=my_string.toUpperCase();//converts to uppercase letter
console.log(my_string2);
let string3=my_string.toLowerCase();//converts to lowercase letter
console.log(string3);

//repeat(n)->repeat string n times 
let str="*";
console.log(str.repeat(5));

//trim()-> removes extra spaces from start and end of string
let str4="   Aayush   ";
console.log(str4.trim(),"Hello");

//string Length
let str6="Yojana Pandey";
console.log(str6.length);//return string's length

//string are immutable(primitive datatypes)
let str7="Bottle";
str[2]=str4;
//  console.log(str7);
console.log(str[2]);//undefined
console.log(str7.at(-6));//negative indexing
console.log(str7.at(3));
console.log(str7.at(1));
console.log(str7.at(-1));
console.log(str7.charAt(3));


//searching for substring

let str8="This is my test string test";
console.log(str8.includes("test"));//either true or false
console.log(str8.startsWith("This"));//true
console.log(str8.endsWith("ing"));//false
console.log(str8.endsWith("st"));//true
console.log(str8.indexOf("test"));//11
//idexOf Method - returns index of the string

function titleCase(str){
    let newstr=str[0].toUpperCase()+str.slice(1);
    return newstr;
}

let result=titleCase("dinesh basnet");
console.log(result);
