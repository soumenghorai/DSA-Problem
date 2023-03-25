function squareRoot(number, precision){
    let start = 0;
    let end = number;

    let ans = 0.0

    while(start <= end){
        mid = start + Math.floor((end - start) / 2)

        if(mid * mid === number){
            ans = mid;
            break;
        }
        if(mid * mid < number){
            start = mid + 1;
            ans = mid;
        }
        else{
            end = mid - 1
        }
    }
    // For fractional part
    let increment = 0.1;
    for(let i = 0; i < precision; i++){
        while(ans * ans <= number){
            ans = (parseFloat(ans) + parseFloat(increment)).toFixed(precision)
        }

        ans = (parseFloat(ans) - parseFloat(increment)).toFixed(precision)
        increment = increment / 10
    }
    return ans
}
console.log(squareRoot(5, 5))