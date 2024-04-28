// let empl1={
//     name:"vikas",
//     age:27,
//     salary:10000,
//     task:function(){
//         console.log("teaching");
//     },
//     doj:"10 dec 2023",
// }

// let emp2={
//     name:"jugal",
//     age:22,
//     salary:5000,
//     task:function(){
//         console.log("office serve");
//     },
//     doj:"10 nov 2020",
// }

// let emp3={
//     name:"saviour",
//     age:28,
//     salary:150000,
//     task:function(){
//         console.log("batch mgmt");
//     },
//     doj:"10 oct 2023",
// }

//function cons - 

function employee(name,age,salary,task,doj){
    this.name=name;
    this.age=age;
    this.salary=salary;
    this.task=task;
    this.doj=doj;



}
let emp1=new employee("vikas",27,10000,function(){console.log("teaching");},"10 dec 2023");
console.log(emp1);
let emp2=new employee("jugal",22,5000,function(){console.log("offcie serve");},"10 oct 2020");
console.log(emp2);





