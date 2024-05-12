

// promise - waada 

//syntax 


// let promise=new Promise(function(){
//     console.log("hell0");
// })

// console.log(promise);

// let promise =new Promise((resolve,reject)=>{
//     // resolve();
//     // reject();
//     // resolve("ye lo chips ")
//     // reject("chips nahi h")
//     // resolve("ye lo chips")
//     reject("nahi h chps ")
// })

// console.log(promise);
// console.log("---------------");
// // promise.then((data)=>{
// //     console.log(data);
// // })


// promise.catch((error)=>{
//     console.log(error);
// })

let items =["pen","pencil","marker","eraser"]

let promise = new Promise((resolve,reject)=>{

    if(items.includes("pen")){
        resolve("pen mil gya")
    }else{
        reject("pen nahi mila")
    }




})

// promise.then((data)=>{
//     console.log(data);
// })

// promise.catch((error)=>{
//     console.log(error);
// })

promise.then((data)=>{
    console.log(data);
}).then((data)=>{
    console.log(data);
}).then((data)=>{
    console.log(data);
}).then((data)=>{
    console.log(data);
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})