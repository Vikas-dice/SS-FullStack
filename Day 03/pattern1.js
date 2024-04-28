
let val=65;
for(let row=1;row<=4;row++){
    for(let col=1;col<=row;col++){
         process.stdout.write(String.fromCharCode(val))
        val++;
    }
    console.log();
}

//charCodeAt()
//String.fromCharCode(65);

let name="vikas";
console.log(name.charCodeAt(2));

console.log(String.fromCharCode(107));

