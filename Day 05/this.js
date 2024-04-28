let obj={
    name:"vikas",
    age:27,
    salary:10000,
    sayHello:function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.salary);

    }
}

obj.sayHello();

//case 2 - global - this access - {X}.(X)

console.log(this); //window object -


//case 3 - function - this
//case 3.1 es5 -this 

function fun(){
    console.log(this);
}

fun();

//case 3.2 - es6- fat arrow - this

let gun=()=>{
    console.log(this);
}

gun();


//case 4 - object - function - methods - es5 - this- parent object

let object={
    name:"puneet",
    lastname:"chaudhary",
    age:28,
    salary:10000,
    fun2:function(){
        console.log(this);
    }
}


object.fun2();


//case 4.2 - object - function - method - fat arrow fun-this- window object

let object2={
    name:"sahil",
    lastname:"rana",
    age:25,
    salary:5000,
    gun2:()=>{
        console.log(this);
    }
}

object2.gun2();


//case 5 - object - fun- method - child fun - es5 
//agar dono function es5 wale h kisi object k andrr tpo this keyqwprd hme window object dega 

let object3={
    name:"dice",
    lastname:"academy",
    age:40,
    salary:100000,
    parent:function(){
        function child(){
            console.log(this);
        }
        child();
    }
}

object3.parent();


//case 5.2 parent -fat arrow, child- es5 - this- window object


let object4={
    name:"piyush",
    lastnanme:"arora",
    age:21,
    salary:50000,
    parent:()=>
    {
        function child(){
            console.log(this);
        }
        child();

    }

}


object4.parent();

//case 5.3 - parent - fat arrow,child -fat arrow - this


let object5={
    name:"ajay",
    lastname:"tiwari",
    age:21,
    salary:50000,
    parent:()=>{
        let child=()=>{
            console.log(this);

        }
    }
}


object5.parent();

//case 5.4 parent -fat arrow, child - es5

let obejct6={
    name:"parekh",
    lastname:"tanwar",
    age:26,
    salary:100000,
    parent:()=>{
        function child(){
            console.log(this);
        }
        child();
    }
}


obejct6.parent();


// case 7= dom 

