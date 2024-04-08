let stateOfTheWebPage = function(state){
    return new Promise(function( resolve, reject){
        if(state){
            resolve ('Page is Loaded');
        }else {
            reject('Page not loaded yet')
        }
    })
}

stateOfTheWebPage(true).then(resoult=>{
    console.log(resoult);
});

stateOfTheWebPage(false).catch((resoult)=>{
    console.log(resoult);
})



new Promise((resoult,reject)=>{
    resoult(1);
}).then((resoult)=>{
    console.log(resoult); // 1
    return resoult*2; 
}).then((resoult2)=>{
    console.log(resoult2);  // 2
    return resoult2*2;
}).then((resoult3)=>{
    console.log(resoult3);  // 4
})