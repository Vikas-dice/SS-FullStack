

// let arr =[10,20,30,40,50];

// arr.forEach(function(maal){
//     console.log(maal);
// })


function testing(callback){
    callback();

}

testing(()=>{
    console.log("test 1");
    testing(()=>{
        console.log("test 2");
        testing(()=>{
            console.log("test 3");
            testing(()=>{
                console.log("test 4");
                testing(()=>{
                    console.log("test 5");
                    testing(()=>{
                        console.log("test 6");
                    })
                })
            })
        })
    })
})

