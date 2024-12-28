function iseven(num){
    if((num & 1)==0){
        return "Even";
    }
    else{
        return "ODD";
    }

}
console.log(iseven(4));
