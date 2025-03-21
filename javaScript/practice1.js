let subjects=["English","Nepali","Maths","Computer","Social"];
subjects.forEach(function(element,index,array){
    array[index]=element.toUpperCase();
    });
// console.log(subjects);

//find() and findIndex()

let numbers=[12,34,10,5,18,6]

function checkValue(val){
    return val<10;
}
// console.log(numbers.find(checkValue));
// console.log(numbers.findIndex(checkValue));

let value=(val)=>val>20;
console.log(numbers.find(value));
console.log(numbers.findIndex(value));


