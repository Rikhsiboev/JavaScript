// if and else statement 
let num1 = 100;
let nums2 = 10;

let maxNumber; 
if(num1>nums2){
    maxNumber = num1;
}else{
    maxNumber = nums2;
}
console.log(maxNumber);

console.log("Ternary operator");
maxNumber = num1 > nums2 ? num1 : nums2 ;
console.log(maxNumber);
console.log("Switch");
let month = 4;
let dayCount;
switch(month){
    case 2:
        dayCount = 28;
        break;
    case 1:
        dayCount = 31;
        break;
    case 4:
        dayCount = 30;
        break;
    default:
        dayCount = -1;
        break;
}
console.log(dayCount);