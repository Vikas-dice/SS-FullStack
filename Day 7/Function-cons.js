

// let object ={
//     name:"vikas",
//     lastname:"chaudhary",
//     age:27,
//     sayHello:function(){
//         console.log("good morning ");
//     }

// }

// let emp1={
//     name:"puneet",
//     lastname:"chaudhary",
//     age:28,
//     task:function(){
//         console.log("it guy");
//     }
// }

// let emp2={
//     name:"jugal",
//     lastname:"kumar",
//     age:22,
//     task:function(){
//         console.log("office boy");
//     }
// }

// let emp3={
//     name:"manoj",
//     lastname:"kumar",
//     age:20,
//     task:function(){
//         console.log("driver");
//     }
// }


//es 5 functions cons
//cons - 

// new this




// function Employee(){
//     name="vikas";
//     lastname="chaudhary";
//     age=27;
//     task=function(){
//         console.log("teaching");
//         return "dice";
//     }

// }


// //new keyword

// let emp1= new Employee();
// console.log(emp1);
// let ans =emp1.task();
// console.log(ans);



// function Employee(){
//     this.name="vikas";
//     this.lastname="chaudhary";
//     this.age=27;
//     this.task=function(){
//         console.log("teaching");
//         return "dice"
//     }
    
// }

// let emp1 = new Employee();
// console.log(emp1);
// let ans =emp1.task();
// console.log(ans);
// let emp2= new Employee();
// console.log(emp2);
// console.log(emp1==emp2);

function Employee(fname,lname,age,task){
    this.firstname=fname;
    this.lastname=lname;
    this.age=age;
    this.task=task;
    
}

let emp1= new Employee("puneet","chaudhary",27, function(){console.log("it guy");})
let emp2= new Employee("jugal","kumar",22,function(){
    console.log("office boy");
})
let emp3= new Employee("manoj","kumar",30,function(){
    console.log("driver");
})
console.log(emp1);
console.log(emp2);
console.log(emp3);






