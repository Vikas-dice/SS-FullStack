function max(str){
    // console.log(str);
    var maxlength=0;
   
    for(let i=0;i<str.length;i++){
      
        if(str[i].length>maxlength){
            maxlength=str[i].length;
        }
    }
    return maxlength;


}
let string="vikas chaudhary dice academy";
let ans =max(string.split(" "));
console.log(ans);



