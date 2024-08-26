console.log(56&&100);//100
let country=null;
let area=(country??140);
console.log(area);//140
var val=1 && console.log("Hello");//hello
console.log(val);//undefined
var val=0 && console.log("Hello");
console.log(val);//0
let marks=0;
console.log(marks && 100);//0
console.log(true&&"");//" "
console.log(true&&null);//null
console.log(""||false||null);//null
console.log(""||false||false);