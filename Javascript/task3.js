fun1 = ()=>{
    console.log("no argument and no return type")
}

fun2 = ()=>{
    var name='sudhee';
    return name;
}

fun3 = (a)=>{
    console.log(a)
}

fun4 = (a)=>{
    return a+1
}

fun1()
var n = fun2()
console.log(n)
fun3(5)
var b = fun4(5)
console.log(b)