let str="vikas chaudhary dice academy                   "
//method 1 - length
console.log(str.length);
//charAt()
console.log(str.charAt(6));

//charCodeAt()
//ascii - char - ascii -

let value=32;
console.log(String.fromCharCode(value));

//charcodeat

console.log(str.charCodeAt(6));

//upper case 

console.log(str.toUpperCase());

//lowercase
console.log("VIKAS".toLowerCase());

//substring , substr

 console.log(str.substring(2,7)); // para1- inclusive , param2 - exclusive
console.log(str.substr(2,7)); //22 params - inclsuive 

//slice - 

console.log(str.slice(2,10));
console.log(str.slice(2));
console.log(str.slice(8,2));
console.log(str.slice(-3,-1));
console.log(str.slice(-2,-5));

//split
console.log(str.split(" "));


//trim
// console.log(str.trim());

//trimstart
console.log(str.trimStart());

//trimend
console.log(str.trimEnd());


//repeat method

console.log(str.repeat(4));

//q1- vikas chaudhary dice academy- array - split on the bases on space - array k iterate - length 
// sabse badi length wali lengthn 



