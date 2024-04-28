// for(let row=1;row<=5;row++){
//     for(let st=1;st<=5-row+1;st++){
//         process.stdout.write("*")
//     }
//     console.log();
// }


let nst=5;
for(let row=1;row<=5;row++){
    //stars
    for(let st=1;st<=nst;st++){
        process.stdout.write("*")
    }


    //new line
    console.log();

    //update -stars
    nst=nst-1;

}