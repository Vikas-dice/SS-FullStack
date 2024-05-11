
class Parent{
    firstname="vikas";
    lastname="chaudhary";

    getFullName(){
        return this.firstname+" "+this.lastname
    }

    sayHello(){
        return "good morning"
    }
}

class Child extends Parent{
    firstname="puneet"
    sayHello(){
        return "good night";
    }


}

let child1 = new Child();
console.log(child1.firstname);
console.log(child1.sayHello());