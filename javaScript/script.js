let set = new Set([1,2,3,4]);
console.log(set);
set.add(9);
// console.log(set);
set.delete(4);
// console.log(set);
// console.log(set.has(7));
for(let i of set){
    // console.log(i);
}
set.clear();
console.log(set);

let set1 = new WeakSet();
console.log(set1);
let fruit = {
    name:"apple"
};
// set1.add(fruit);
set1.delete(fruit);
console.log(set1);