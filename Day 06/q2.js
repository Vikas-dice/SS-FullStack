function reverse(strarr){
    let i=0;
    let j=strarr.length-1;
    while(i<=j){
        let temp=strarr[i]
        strarr[i]=strarr[j]
        strarr[j]=temp;


        i++;
        j--;


    }
    console.log(strarr);

 

}



let str="my name is chaudhary";
reverse(str.split(" "));


