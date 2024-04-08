let score = new Array(); // creates an ampty Array
let numbers = new Array(10); // creates array with size 10
let emtyArray = [];
let myNumbers = new Array(1,2,3,4,5,10);
let colors = ['red','green','blue']

console.log(score);
console.log(numbers);
console.log(emtyArray);
console.log(myNumbers);
console.log(colors);



// get secound colors 
console.log(colors[1]);

// adding elements in end 
colors.push('white');
colors.push(5);
console.log(colors);

// adding elements in front
colors.unshift('orange');
console.log(colors);


//loop with array 
for (let index = 0; index < colors.length; index++) {
    const element = colors[index];
    console.log(element);
}

console.log("========forOf======");
for (const value of colors) {
    console.log(value);
}
console.log("========forEach======");
colors.forEach(elements => {
    console.log(elements)
})


// adding mult adta 
console.log("========adding mult adta======");
let soupOfData  = [ 5,'tom' , true , undefined, colors];
soupOfData.forEach(elements=>{
    console.log(typeof elements)
})