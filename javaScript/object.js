let color2="yellow";
let color1 = "red";
let obj = {
    [color1]:"apple",
    [color2]:"banana"
}
console.log(obj.red);//apple
console.log("red" in obj);//true
// console.log(red in obj);//not defined
console.log("green" in obj);//false
// delete obj.red;
delete obj[color1];
console.log(obj);
