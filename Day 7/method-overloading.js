

class Parent{
    firstname="vikas";
    lastname="chaudhary"

    area(l,b,h){
        return l*b*h;
    }


    area(l,b){
        return l*b;
    }

    area(side){
        return side*side;
    }


}

let p1 = new Parent();
let ans =p1.area(5,5,4);
console.log(ans);
