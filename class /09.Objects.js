let person = {
    firstName : 'Bob',
    lastName: 'Rikh',
}

console.log(person);
console.log(person.firstName);

person.age = 25;  // adding new as Dot
console.log(person)

delete person.lastName;
console.log(person);

let address = {
    'building No ': 5555,
    street : 'Mainstreet',
    state : 'Ny'
}
console.log(address);
console.log(address['building No ']);


console.log('street' in address); // chech in a property exist


let course = {
    courseName : 'JS',
    url : "www.google.com",
    subject : ['Object','Arrays','Function']
}

for (const key in course) {
   console.log(key+ ' : ' + course[key]);
}


let myCar = {
    make : 'Dodge',
    year : '2023',
    engine : {
        cylinder : 4,
        size : 2.4
    },
    extras : ['Ac', 'Cruise control','Sound System'],
    drive : function(){
        console.log("Running on Gas");
    }
}
myCar.drive();
console.log( myCar.extras[1]);