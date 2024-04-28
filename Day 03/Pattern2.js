let char='z';
let val=char.charCodeAt(0);
for(let row=1;row<=5;row++){
    for(let col=1;col<=row;col++){
        process.stdout.write(String.fromCharCode(val));
        val--;

    }
    console.log();
}