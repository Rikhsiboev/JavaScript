let str1 = 'Java';
let str2 = "Script";
let str3 = "Bob";

let result; 
result = " The result varible is: " + str1 + str2 + ' ' + str3;  //Like java 

console.log(result);

result = ` The result variable is : ${str1}${str2} ${str3}`;
console.log(result);