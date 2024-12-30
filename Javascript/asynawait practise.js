/*fun = async()=>{
    setTimeout(()=>{
        console.log("KEC")
    },2000)
    console.log(await "KEC")
}
fun()

async function funn(){
    setTimeout(()=>{
        console.log("Hello")
    },2000)
    console.log(await "Hii")

    
}
console.log(funn())
*/
fun4 =async ()=>{
    var a ="this is await"
    return a
}
a=fun4()
console.log(a)
fun4().then((a)=>{
    console.log(a)
})
//promise is resolvd using then
