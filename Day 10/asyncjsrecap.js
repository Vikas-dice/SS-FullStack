

// // console.log("vikas");
// // console.log("chaudhary");

// // let promise= new Promise((resolve ,reject)=>{
// //     for(let i=0;i<=100000000;i++){
// //         resolve("resolved ")


// //     }

// // })



// // console.log("dice");
// // console.log("academy");

// // promise.then((data)=>{
// //     console.log(data);
// // })



// for(let i=0;i<20;i++){
//     console.log("vikas",i);
// }


// let promise1= new Promise((resolve , reject)=>{


//     setTimeout(()=>{

//         resolve("resolved promise ")

//     },4000)
    
// for(let i=0;i<20;i++){
//     console.log("vikas",i);
// }
// })
// promise1.then((data)=>{
//     console.log(data);
// })

// let promise2= new Promise((resolve , reject)=>{


//     setTimeout(()=>{

//         resolve("resolved promise  2")

//     },2000)
    
// for(let i=0;i<20;i++){
//     console.log("puneet",i);
// }
// })
// promise2.then((data)=>{
//     console.log(data);
// })


// let promise3= new Promise((resolve , reject)=>{


//     setTimeout(()=>{

//         resolve("resolved promise 3 ")

//     },1000)
// })
// promise3.then((data)=>{
//     console.log(data);
// })


// let promise4= new Promise((resolve , reject)=>{


//     setTimeout(()=>{

//         resolve("resolved promise4 ")

//     },0)
// })
// promise4.then((data)=>{
//     console.log(data);
// })




// console.log("hello world");
// console.log("vikas chaudhary after all promises ");




// let promise = new Promise((resolve , reject)=>{

//     // resolve("resolved promise ")
//     reject("rejected promsie ")

// })


// promise.then((data)=>{
//     console.log(data);
//     return data;
// }).then((data)=>{
//     console.log(data);
//     return data;
// }).then((data)=>{
//     console.log(data);
//     return data;
// }).then((data)=>{
//     console.log(data);
//     return data;
// }).then((data)=>{
//     console.log(data);
// }).then((data)=>{
//     console.log(data);
// }).then((data)=>{
//     console.log(data);
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
//     throw new Error("cutsom errro")
// }).catch((error)=>{
//     console.log(error);
//     throw new Error("cutsom errro")
// }).catch((error)=>{
//     console.log(error);
//     throw new Error("cutsom errro")
// }).catch((error)=>{
//     console.log(error);
//     throw new Error("cutsom errro")
// })






//fetch

//syntax  fetch(url)=promise 


// let promise=fetch("https://restcountries.com/v3.1/all")
// // console.log(promise);


// // promise.then((blob)=>{
// //     console.log(blob.json());
// // })

// promise.then((blob)=>{
//     // console.log(blob);
//     return blob;
// }).then((data)=>{
//     let actualdata= data.json();
//     console.log(actualdata);
// })


 async function getdata(){

    let blobdata=await fetch("https://restcountries.com/v3.1/all");
    let actualdata= await blobdata.json();
    console.log(actualdata);

   
}


getdata();

'https://randomuser.me/api/'