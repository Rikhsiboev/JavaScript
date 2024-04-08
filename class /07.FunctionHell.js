// Synchronaze mean waithing other code 
// UnSynchronaze mean not waiting

//Callback


// // lets create a function hell by async feature 

// function waitingForSomeServerToAct() {

//     let dataNeeded;
//     setTimeout(()=>{
//         console.log('Backend data received');
//         dataNeeded = 'Bob'
//     },5000);
//     return dataNeeded;
// }

// let data = waitingForSomeServerToAct();
// console.log(data);

function functionThatNeedsBackEndData(info){
    console.log('I need this info for the rest of my code'+info);
}

// functionThatNeedsBackEndData(waitingForSomeServerToAct());


// How to solve feature with callback  


function waitingForSomeServerToAct_WithCallBack(callback) {

    let dataNeeded;
    setTimeout(()=>{
        console.log('Backend data received');
        dataNeeded = ' Bob ';
        callback(dataNeeded);
    },5000);
    return dataNeeded;
}

waitingForSomeServerToAct_WithCallBack(functionThatNeedsBackEndData)