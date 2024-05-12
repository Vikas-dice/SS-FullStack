

// // class Parent{
// //     firstname;
// //     lastname;
// //     age;
// //     salary;
// //     task;


// //     constructor(firstname,lastname,age,salary,task){
// //         this.firstname=firstname;
// //         this.lastname=lastname;
// //         this.age=age;
// //         this.salary=salary;
// //         this.task=task;

// //         console.log(" m chal gya ");

// //     }
// // }

// // let p1= new Parent("vikas","chaudhary",27,10000,function(){console.log("teaching");})
// // let p2= new Parent("Puneet","chaudhary",28,10000,function(){console.log("it guy");})
// // let p3=new Parent();
// // console.log(p1);
// // console.log(p2);



// class Teacher{
//     firstname;
//     lastname;
//     salary;
//     task;

//     constructor(firstname,lastname,salary,task){
//         this.firstname=firstname;
//         this.lastname=lastname;
//         this.salary=salary;
//         this.task=task;
//     }
// }


// class Staff extends Teacher{
//     constructor(firstname,lastname,salary,task){
//         super();
//         this.firstname=firstname;
//         this.lastname=lastname;
//         this.salary=salary;
//         this.task=task;
//     }
   

// }


// let staff1 = new Staff("jugal","kumar",22,console.log("office boy"));
// console.log(staff1);



// class Parent{


//     area(l,b){

//         return l*b;
//     }


//     area(side){
//         return side*side;
//     }
// }

// let p1 = new Parent();
// let ans =p1.area(6);
// console.log(ans);


class Parent{
    firstname="vikas";

    sayHelloToMe(){
        return "hello"+this.firstname;
    }
}


class Child extends Parent{
    firstname="puneet";
    sayHelloToMe(){
        return "dice ACADEMY"
    }


}

let child1 = new Child();
console.log(child1.firstname);
console.log(child1.sayHelloToMe());
