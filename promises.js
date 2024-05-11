const myPromise = new Promise(function(resolve,reject){
    const a= 4
    const b= 5

    setTimeout(()=>{
        if(a===b){
            resolve(`${a} is equal to ${b}`)
        }
        else{
            reject(`${a} is not equal to ${b}`)
        }
    },1000)
})

myPromise.then(function(data){
    console.log(data)
}) // resolve , fullfilled promises

myPromise.catch(function(failed){
    console.log(failed)
}) // reject promises


