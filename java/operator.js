console.log(5>4);//true
console.log("apple">"pineapple");//false
console.log("2">"12");//true
console.log(undefined==null);//true
console.log(undefined===null);//false
console.log(null=="\n0\n");//false
console.log(null===+"\n0\n");//false

console.log(""+1+0);//10
console.log(""-1+0);//-1
console.log(true+false);//1
console.log(6/"3");//2
console.log("2"+"3");//23
console.log(4+5+"px");//9px
console.log("$"+4+5);//$45
console.log("4"-2);//2
console.log("4px"-2);//Nan
console.log("-9"+5);//-95
console.log("-9"-5);//-14
console.log(null+1);//1
console.log(undefined+1);//Nan
console.log("\t\n"-2);//-2
let val=1;
val=-val;
console.log(val);//-1
let val1=15,val2=5;
val=-val2;//-5 unary operator
val=val2-val1;//-10 binary operator
console.log(val);
a=1+"3";
console.log(a);//13
b="3"+1;
console.log(b);//31
c="2"+1+1;
console.log(c);//211
console.log(2+2+"1");//41
console.log(2+"1"+1);//211
console.log(6-"5");//1
console.log('6'/'2');//3
console.log('6'*'2');//12
let p=5,
q=10,
r=2;
p +=2//7
q-=4//6
r*=12//24
console.log(p,q,r);
console.log(Number(true));//1
let t=3;
t++;
console.log(t);//4





