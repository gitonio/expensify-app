const promise = new Promise(( resolve, reject) =>{
    const x = Math.round(Math.random()) 
    if (x === 0) {
        setTimeout(()=>{
            resolve('this is my resolved data')
        }, 1500)
    }
    else {
        setTimeout(()=>{
            reject('this is my rejected data')
        }, 1500)
      
    }
    
    

})

console.log('before')
promise.then((data) => {
    console.log(data)
}).catch((data) => {
    console.log(data)
})

promise.then((data) => {
    console.log(data)
},(data) => {
    console.log(data)
})

console.log('after')