

//object oriented princ-- 

//

// class Teachers{
//     name;
//     age;
//     task;
//     salary;

//     constructor(name,age,task,salary){
//         this.name=name;
//         this.age=age;
//         this.task=task;
//         this.salary=salary;
//     }
// }

// class Admin{
//     name;
//     age;
//     task;
//     salary;

//     constructor(name,age,task,salary){
//         this.name=name;
//         this.age=age;
//         this.task=task;
//         this.salary=salary;
//     }
// }

// class Officeboy{
//     name;
//     age;
//     salary;
//     task;
//     constructor(name,age,salary,task){
//         this.name=name;
//         this.age=age;
//         this.salary=salary;
//         this.task=task;
//     }
// }











// class Teachers{
//     constructor(){
//         this.name="vikas";
//         this.age=27;
//         this.salary=10000;
//         this.task=function(){
//             console.log(":teaching");
//         }
//     }
    
// }

// class Admin extends Teachers{

// }
// let admin1 = new Admin();
// console.log(admin1);




class Parent{
    firstname;
    lastname;
    age;
    salary;

    constructor(fname,lname,age,salary){
        this.firstname=fname;
        this.lastname=lname;
        this.age=age;
        this.salary=salary;
    }
}

class Child extends Parent{
    constructor(fname,lname,age,salary){
        super();
        this.firstname=fname;
        this.lastname=lname;
        this.age=age;
        this.salary=salary;
    }

}

let child1 = new Child("vipin","kumar",32,10000);
console.log(child1);

7