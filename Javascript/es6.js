//1.variables
// 2.arrow function
arrowFun = (students)=>{
    console.log(students[0]);

}
arrowFun(["AIML","KEC","IT","CSE"]);

sudhee = (ksha)=>{
    console.log(ksha)
}
sudhee(["good","intelligent","sports girl"])
//3.destructuring operator
var marks = [90,95,93];
var [m1,m2,m3] = marks;
console.log(m1,m2,m3)
//destructuring is done from left hand side 
var marks = [90,95,93];
var [m1,m2] = marks;
console.log(m1,m2)
//so it prints 90 and 95
//4.ternary operator 

a=10
out=(a%2==0)? "Even" : "Odd";
console.log(out);
//5.spread operator 
sudhee=["Tom","jerry","Tony","Stark","Ahuja"];
Ksha=["sri","ram","raj","rani"];
sudheeksha=[...sudhee,...Ksha];
console.log(sudheeksha);
sudheeksha2=["sri","ram","raj","rani",...sudhee];
console.log(sudheeksha2);
//6.rest operator
function restparam(a,b){
    return a+b;
}
console.log(restparam(1,5))

function rest(a,b,...c){
    console.log(c)
}
rest("sudhee","ksha","rani","prathi")
//7.scope two *local(let) or block scope *global (var and const )
var e=10;
var r=5;
console.log(e)
{
    var r=7;
    var w=9;
    console.log(r)
}
console.log(r)
//8.hoisting
console.log(c)
var c=10;
console.log(c);
console.log(d);
const d=3.14
console.log(d);
//error ReferenceError: Cannot access 'd' before initialization ,var need not b initiaized whereas for const and let we need to do it
console.log(p);
let p=3
console.log(p);
