// for loop 
// while loop 
// do while loop 
for (let i = 0; i <= 5; i++) { // let create local variable 
    console.log(i);
}
console.log("-----------VAR---Global--------");
// all type of declaring variables in Js: before ES6
for (var j = 0; j < 5; j++) { // let create local variable 
    console.log(j);
}
console.log(j);  // var as Gloabal  
console.log("while loop");  
let i = 0;
while (i<3) {
    console.log(i);
    i++;
}
console.log("-----------Do_While--------");
let z = 0;
do {
    console.log(z);
    z++;
} while (z<3);