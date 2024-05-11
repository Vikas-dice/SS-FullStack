//class - blueprint - skelton - global class

// let arr=[10,20,30];
// console.log(arr.__proto__);

// class Employee{
//     name="vikas";
//     lastname="chAUDHARY";
//     age=27;
//     task=function(){
//         console.log("teaching");
//     }
// }

// let emp1= new Employee();
// let emp2= new Employee();
// console.log(emp1);
// console.log(emp2);



// class Employee{
//     firstname;
//     lastname;
//     age;
//     task;


//    constructor(){
//     this.firstname="vikas";
//     this.lastname="chaudhary";
//     this.age=27;
//     this.task=function(){
//         console.log("teaching");
//     }

//     console.log("m ek baar hi chalunga");

//     }
// }

// let emp1= new Employee();
// let emp2= new Employee();
// let emp3= new Employee();
// console.log(emp1);
// console.log(emp2);


class Employee{
    firstname;
    lastname;
    age;
    task;

    constructor(fname,lname,age,task){
        this.firstname=fname;
        this.lastname=lname;
        this.age=age;
        this.task=task;
    }
}

let emp1= new Employee("suman","kumari",20,function(){console.log("student");})
let emp2= new Employee("kunal","malik",25,function(){
    console.log("enginner");
})
console.log(emp1);
console.log(emp2);




