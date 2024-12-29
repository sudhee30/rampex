/*callback 
It is calling back a function
It is kind of nested function but not nested function
*/
function databasesharing(){
    console.log("Data base stored successfully");
}
function submitform(formMsg,dbs){
    setTimeout(()=>{
    dbs()
    console.log(formMsg)
},1000)
}
submitform("Form Submitted Successfully",databasesharing)
