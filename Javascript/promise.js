//location finder
/*function locationfinder(){
    train = 8
    return new Promise((resolve,reject)=>{
        if(train==7){
            resolve("Train arrived")
        }
        else{
            reject("NOt arrived")
        }
    })
}
locationfinder().then((resolvedmsg)=>{
    console.log(resolvedmsg)

}).catch(function(rejectedmsg){
    console.log(rejectedmsg)
})
*/
function istimeconsumed(t){
    time=1000
    return time<=t

}
function isValidLocation(loc){
    location ="Ooty"
    return loc==location

}

function locationfinderr(){
    place="Ooty"
    time=1000
    return new Promise((resolve,reject)=>{
        if(isValidLocation(place) && istimeconsumed(time)){
            resolve("Found")
        }
        else{
            reject("Not Found")
        }
    })
}
console.log(locationfinderr())