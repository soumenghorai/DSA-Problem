function getSumPairZero(array){
    for(let i = 0; i<=array.length; i++){
        console.log("Outer Loop");
        for(let j = 0; j<=array.length; j++){
            console.log("Inner Loop");
            if(array[i] + array[j] === 0){
                return [array[i], array[j]];
            }
        }
    }
}
let array = [-5,-4,-3,-2,0,2,4,6,8]
let result = getSumPairZero(array)
console.log(result)