

// let promise1 = new Promise((resolve , reject)=>{
//     // resolve("resolved promise")
//     reject("rejected")
   
// })

// // console.log(promise1);
// promise1.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })


// setTimeout(() => {
//     console.log("vikas chaudhary");
    
// }, 4000);


// let id=setInterval(() => {
//     console.log("vikas");
    
// }, 2000);
// console.log(id);
// clearInterval(id)


console.log("hello world ");


let promise1 = new Promise((resolve, reject)=>{

    setTimeout(() => {
        resolve("resolved promise 1")
        
    }, 4000);

})

promise1.then((data)=>{
    console.log(data);
})
let promise2 = new Promise((resolve, reject)=>{

    setTimeout(() => {
        resolve("resolved promise 2")
        
    }, 1000);

})

promise2.then((data)=>{
    console.log(data);
})


let promise3 = new Promise((resolve, reject)=>{

    setTimeout(() => {
        resolve("resolved promise 3")
        
    }, 3000);

})

promise3.then((data)=>{
    console.log(data);
})

let promise4 = new Promise((resolve, reject)=>{

    setTimeout(() => {
        resolve("resolved promise 4")
        for(let i=1;i<=10;i++){
            console.log("dice",i);

        }
        
    }, 0);

})

promise4.then((data)=>{
    console.log(data);
})


console.log("promise ends here");
for(let i=0;i<50;i++){
    console.log("vikas",i);
}