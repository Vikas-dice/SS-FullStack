// let array=[10,20,30,45,34,46,55,66,77,88,100,1000,1];

// //linear search 

// //q1 - fucntion - 2 param - array,target - 

// function ls(arr,tar){
//     for(let idx=0;idx<arr.length;idx++){
//         if(arr[idx]==tar){
//             return idx;

//         }
//     }
//     return -1;





// }
// let ans =ls(array,34);
// console.log(ans);


// //q2= function - array - max and min, span=max-min

// function span(arr){
//     let max=arr[0];
//     let min=arr[0];
//     for(let idx=0;idx<arr.length;idx++){
//         if(arr[idx]>max){
//             max=arr[idx]
//         }
//         if(arr[idx]<min){
//             min=arr[idx];
//         }
//     }
//     return max-min;

// }
// let ans2=span(array)
// console.log(ans2);


//q3 function - param 2- array,target - 

// let array2=[10,20,3,4,5,3,6,7,3,8,9,100,3,89,3,678,3];

// function count(arr,tar){
//     let freq=0;
 

//     for(let idx=0;idx<arr.length;idx++){
      
//         if(arr[idx]==tar){
//             freq++;

//         }
       
//     }
//     return freq;
 

// }

// let res=count(array2,3);
// console.log(res);



function Bs(arr,tar){
    let start=0;
    let end = arr.length-1;

    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(arr[mid]==tar){
            return start;
        }
        else if(arr[mid]<tar){
            start=mid+1;
        }else{
            end=mid-1;
        }
    }
    return -1;
}

let array=[10,20,30,40,50,60,70,80,90,100]
let ans =Bs(array,70);
console.log(ans);
