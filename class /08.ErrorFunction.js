let x = function (a) {
    return 5*a;
}
//concise way of creating function 
let y = a => 5*a;
console.log(y(5));


let arr = [10,20,30];
// map function 
let newArr = arr.map(each=>each*2);
console.log(newArr);

// varArgs in JS 
function howManyElements (... theArgs){
    console.log(theArgs.length);
}

howManyElements();
howManyElements(5);
howManyElements(3.4,5,6,7,8,9);

function multiply(multiply,...theArgs){
    return theArgs.map(element => multiply * element);
}

console.log(multiply(5,1,2,3,4,5));

let string = 'BOB'
let char = [...string]
console.log(char);