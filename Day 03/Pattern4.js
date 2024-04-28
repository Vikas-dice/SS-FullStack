
let nsp=2;
let val=65;
let nst=1;

for(let row=1;row<=5;row++){
    //space
    for(let sp=1;sp<=nsp;sp++){
        process.stdout.write(" ")
        
    }
    //stars
    for(let st=1;st<=nst;st++){
        process.stdout.write(String.fromCharCode(val))
        val++;
    }

    //new line
    console.log();

    //u[pdate]
    if(row<3){
        nsp=nsp-=1;
        nst=nst+2;
       
        
    }else{
        nsp=nsp+1;
        nst=nst-2;
     
    }
}