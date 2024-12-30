/*
sync : synchronize means cordinating with other fellows
async : It works independently
real time examples:asyn public acnt viewing post by one is also viewed by other at the same time
viewing stry at the same time
async var a=10 this cannot be done bcz var a is a static variable and it is not a operation or function
async can be wrtten inside a function
normal function:
async function functionname(){
clg("Hello")
}
arrow function:
func_name = sync() =>{
    clg("HI")
}
*/
/*
async function funny() {
    return "HI" 
    
}
fun = async () => {
    return "HELLO"
    
}
console.log(funny()) //when we use return, the output will be given with promise ,op will be Promise { 'HI' }
console.log(fun()) 

*/
/*async function funny() {
    console.log( "HI" )
    
}
fun = async () => {
    console.log( "HI" )

}

funny() //as we use console.log theop will be return only hi and hello
fun()*/
fun = async () => {
    setTimeout(()=>{
        return "HI" 

    },1000)
    console.log("HElo")

}
var funn=fun()
console.log(funn)
