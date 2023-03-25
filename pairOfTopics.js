function countNumberOfPairs(A, B){
    let n = A.length;

    let D = new Array(n)

    for(let i = 0; i < n; i++){
        D[i] = A[i] - B[i]
    }
    D.sort((a, b) => a - b)
    let count = 0;
    
    for(let i = 0; i < n; i++){
        if(D[i] <= 0){
            let k = findIndex(D, 0, D.length, -D[i])
            count = count + (n - k)
        }

        else{
            count = count + (((n - i) * (n - i - 1))/2)
            break;
        }
    }
    return count;
}

function findIndex(arr, left, right, element){
    while(left < right){
        let mid = left + Math.floor((right - left) / 2)
        if(arr[mid] > element)
            right = mid;
        else
            left = mid + 1
    }
    return left
}

console.log(countNumberOfPairs([4, 8, 2, 6, 2], [4, 5, 4, 1, 3]))