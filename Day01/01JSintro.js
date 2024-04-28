
//output

console.log("vikas chaudhary"); 
console.log("hello dice")
console.log(123)
console.log("123");

//output - process.stdout.write("fbhrf")
process.stdout.write("hello dice academty")
process.stdout.write("piyush")
process.stdout.write("1233")

// input - variables

//variables -- vary -container - data - ram 

// name="vikas";
// name="piyush";


let myName="vikas chaudhary";
console.log(myName)
let age=27;
console.log(age);
let grade='A';
console.log(grade);

//ram - memory 

//data types - Number , string , boolean , null, undefined , symbol -- priitmitve

let marks =75.50;
let age2=27;
let negative=-20;
let zero=0;


//boolean - true false , 1 0, +5v , -5v

let ismarried=false;
let isTeacher=true;

//null
let appraisal = null;


let smoke =undefined;


// symbol =?


console.log(marks,age2,negative,zero,isTeacher,appraisal,smoke);


//string - + -concatenation

let firstName="vikas";
let Surname="chaudhary"
console.log(firstName+" "+Surname);
console.log("hello "+firstName);

//operators - operand A+B
//ARITHMATIC
//RELATIONAL
//LOGICAL


//ARITHMATIC - + -* /%


console.log(2+5);
console.log(2-5);
console.log(2*5);
console.log(5/2);
console.log(Math.ceil(5/2));
console.log(Math.floor(5/2));
console.log(5%2);


//relationtional - > < <= >= == !== -ans true/false

console.log(2>5);
console.log(2<5);
console.log(2==5);
console.log(5==5);
console.log(2>=2);
console.log(2>=3);
console.log(2<=3);
console.log(3<=3);
console.log(2!=3);



/*
2>2 false
2=3 false
false

*/


/*
2>2 false
2=2 true
 true
*/


//logical operators - and or not
//&& || ! - ans true/false

//&& - mult
//or - add

console.log(true && true);
console.log(true && false);
console.log(false&&false);
console.log(false && true);

// false - false


/*
1 && 0
1*0=0 false


*/
/*
1 && 1
1*1=1 true

*/


//|| - +

console.log(true || false);
console.log(true || true );
console.log(false || false);
console.log(false || true);

// hw - short circuiting 

/*
1 || 0
1+0=1 true


*/

//not oper true- false, false -true
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!1);













//conditionals 

//if else else if 

// if(condiiton/statement- true/false){

// }



// let umar =19;
// if(0){  //17>18 false
//     console.log("you can vote");
// }
// console.log(" tum if k bahar aagye ");


//if else 
//syntax if(conditon/statemment - true/false){

// }else{

// }



// let umar =20;
// if(umar>18){ //20>18 false
//     console.log("you can vote");
// }else{
//     console.log("you cant voteb ");
// }
// console.log("if else k bahar aagyew tum");


// let umar =25;
// else{

// }


// let umar=26;
// if(umar<18){
//     console.log("go to school");
// }
// if(umar>20){
//     console.log("college");
// }
// if(umar>25){
//     console.log("go to work");
// }

// console.log("koi bhi nahi chala");




// let umar =19;
// if(umar<18){
//     console.log(" go to school");
// }else{
//     if(umar>21){
//         console.log("go to college ");
//     }else{
//         if(umar>25){
//             console.log(" go to worl");
//         }else{
//             if(umar==19){
//                 console.log(" you are 19");
//             }
//         }
//     }
// }

// console.log(" apna kaam over ");


let umar =26;
if(umar<18){
    console.log(" go to school");
}else if(umar>21){
    console.log(" go to college");
}else if(umar>25){
    console.log(" go to work");
}else if(umar==19){
    console.log("you are 19");
}
console.log("apna kaam over ");