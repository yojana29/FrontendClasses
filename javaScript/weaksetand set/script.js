//Set
//set is a datatype that is the collection of data
//contains unique values

let set1 = new Set();
// console.log(set1);
let set2 = new Set([1,2,3,4,5,6]);
//  console.log(set2);
set2.add(10);
// console.log(set2);
set2.delete(5);
// console.log(set2);
// console.log(set2.has(4));
// console.log(set2.has(11));
for(let i of set2){
    // console.log(i);
}
set2.forEach((element)=>{
    // console.log(element);
})
// set2.clear();
// console.log(set2);

// WeakSet
//it only stores objects and cannot be iterated
let set3 = new WeakSet();
// console.log(set3);
// console.log(set3.add(3));
let fruit1={
    name:"grapes",   
};
let fruit2={
    name:"Mango",
};
// console.log(set3.add(fruit1));
// console.log(set3.add(fruit2));
// console.log(set3.has(fruit2));
// console.log(set3.has(4));
// set3.delete(fruit2);
// console.log(set3);






