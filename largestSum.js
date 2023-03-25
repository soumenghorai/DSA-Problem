function largestSum(array, num){

    if(num > array){
        throw new Error("num is not greater than array")
    }else{
        let max = 0;
        for(let i=0; i<array.length - num + 1; i++){
            let temp = 0;
            for(let j=0; j<num; j++){
                temp += array[i + j];
            }
            if(temp > max){
                max = temp;
            }
           
        }
        return max
    }
}

// let array = ([1,2,3,4,5,6,7,8,9],4);
let result = largestSum([1,2,3,4,5,6,7,8,9],4);
console.log(result);