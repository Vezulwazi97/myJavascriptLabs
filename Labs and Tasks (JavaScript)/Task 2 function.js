function add(a,b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return NaN;
    }else{
    return a + b;
    }
}

function sub(a,b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return NaN;
    }else{   
    return a - b;
}
}

function mult(a,b){
     if(!Number.isInteger(a) || !Number.isInteger(b)){
        return NaN;
    }else{ 
    return a * b;
}
}

console.log(add(2,2));
console.log(mult(2,5));
console.log(sub(4,3));
