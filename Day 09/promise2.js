

let promise= new Promise((resolve,reject)=>{
    // resolve("resolved promise ")
    reject("rekected promsie ")


})

promise.then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    throw new Error("custom error")
   
}).catch((error)=>{
    console.log(error);
    throw new Error("custom error")
    
    
}).catch((error)=>{
    console.log(error);
    throw new Error("custom error")
}).catch((error)=>{
    console.log(error);
    throw new Error("custom error")
})
