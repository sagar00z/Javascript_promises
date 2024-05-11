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

// example of coffee shop 

function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink==='coffee'){
            resolve('order of coffee recived')
        }
        else{
            reject('other order reject')
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('order is processing')
        resolve(`${order} is served`)
    })
}

placeOrder('coffee').then(function(orderPlaced){
    console.log(orderPlaced)
    let orderIsProcess = processOrder(orderPlaced)
    return orderIsProcess
}).then(function(processedOrder){
    console.log(processedOrder)
}).catch(function(err){
    consol.log(err)
})
