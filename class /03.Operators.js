// Js supports all kind of operations, order of operations is same with Jave 

console.log(4+4* -1 - 8/2); // 8/2 = 4   4*-1 = -4 => (4+ - 4 - 4) => -4


// Prefix                      
console.log("Prefix");
let a = 5;                         
console.log(++a)     
console.log("-----------------");      
// Postfix
console.log("Postfix");
let  b= 5;  
console.log(b++); // 5 
console.log(b); // 6 

b+=a;  // b = b + a;
console.log(b); 
console.log("-----------------"); 
// Comporison true or false 
console.log("Comporison true or false");
let one = 1 ; 
let one_again  = 1;
let one_string = '1';
let two_string = '2';

console.log(one == one_again); // true 
console.log(one == one_string); // true 
console.log(one === one_string); // false
console.log(one === one_again); // true 
console.log(one_string === two_string); // false 

console.log("-----------------"); 
console.log("-------Logic Operators ----------"); 
let num1 = 5;
let num2 = 10;
let num3 = 15;
console.log("------&&----------"); 
let result = num1 < num2 && num1 < num3; // true && true => true 
console.log(result);
console.log("------&&----------"); 
result = num1 > num2 && num1 < num3; // false && true => false 
console.log(result);
console.log("------||----------"); 
result = num1 > num2 || num1 < num3; // false || true => true 
console.log(result);