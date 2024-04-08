let message;

message = "Hello Bob"

console.log(message);


// creatting vatibales 
let admin,userName;
userName = "John";
admin=userName;
console.log(admin);

/*
* JS Is Dynamicly language 
*/ 

let a; 
console.log(typeof a ); // undefined
a = 5; // JS infers that a is number

console.log(typeof a );
a = "Bob";
console.log(typeof a );
a = true ; 
console.log(typeof a );
a = null;
console.log(typeof a );

let x = 5, y = " Bob"; 
console.log(x+y);
console.log(x*y); // can not NaN

const b = 45; // constant number can not change 
// b = 30;
// console.log(b);
