//primitive - number string undefiend null symbol boolean

//non primitive  {} []()- object array functions 

let age=10;
let name="vikas";


//10 logo k marks 


//array - js dynamic values
//tardition array - homogenous data

//number [10,20,30,40,"vikas"];

//[10,20,30,23.45,true,false,null,undefiend ,function fun(){},[1,2,3],{a:10,b:20}]



//syntax array
let marks =[20,30,40,50,60,70,99,89,99];


let arr=[10,20,30,34.56,0,'a','b',"vikas",[100,200,300],function fun(){},function gun(){}]
console.log(arr[0]);
console.log(arr[5]);


//length

console.log(arr.length);
console.log(arr[arr.length-1]);

//traverse 

// for(let idx=0;idx<arr.length;idx++){
//     console.log(arr[idx]);
// }


// let idx=0;
// while(idx<arr.length){
//     console.log(arr[idx]);
//     idx++;

// }

// let idx=0;
// do{
//     console.log(arr[idx]);
//     idx++;
// }while(idx<arr.length);


// //for of loop
// for(const value of arr){
//     console.log(value);
// }

//object


let obj={
    name:"vikas",
    age:27,
    salary:10000,
    addres:"delhi",
    marks:[10,20,30],
    ismarried:false,
    fun:function (){
        console.log("i am function inside object");
        return 1000;
    }
}

console.log(obj.age);
console.log(obj.name);
console.log(obj.marks[1]);
console.log(obj.fun());

//object traverse 

//for in 

for(const key in obj){
    console.log(key,obj[key]);
}




