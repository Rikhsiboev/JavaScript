//AS method but no Access and no Overriding 

//creating 
function add(a,b){
    console.log("Total is : " + (a + b));
}

//calling and use this method 
add(10,20)

// return type function
function multiply(a,b){
    return console.log("Total is : " + (a * b));
}

multiply(2,4)

let devide = function(a,b){
    return a/b;
}

console.log(devide(20,10))

let anyName  = devide;
console.log(anyName(400,20))

function average(a,b,fn){
    return (a,b)/2;
}
function sum (a,b){
    return (a+b);
}
console.log("averageOfTotal");
let averageOfTotal = average(10,20,sum);
console.log(averageOfTotal);
console.log("averageOFMultiply");
let averageOFMultiply = average(10,20,multiply(30,40));
console.log(averageOFMultiply);