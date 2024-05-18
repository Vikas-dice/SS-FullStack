// let response=fetch("https://restcountries.com/v3.1/all")
// console.log(response);

// response.then((blob)=>{
//     console.log(blob);
//     return blob;
// }).then((data)=>{
//     let actualdata=data.json();
//     console.log(actualdata);
// })

async function getDataFromApi(){

    console.log("hello");

    let response= await fetch("https://restcountries.com/v3.1/all")
    console.log("hi");
    let data=await response.json();
    console.log("bye");
    console.log(data);
    console.log("bye bye");


}

getDataFromApi();