array=[10,20,30,[40.5,6.7],"KEC","a",true]
console.log(array);
//for in 
for(var a in array){
    console.log(a)
}
//for of
for (var b of array){
    console.log(b);

}
//for each
/*array=[10,12,11,13]
array.forEach((elemen,index)=>{
    console.log("Element is" ,elemen,"and its index is",index);
})
    */
obj={
    "Name " : "Sudhee",
    "Class" : "AIML",
    "Age" : 20
}
/*obj.forEach((value)=>{
    console.log(value);
})
    */
//for of task
console.log(obj);
for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
}
