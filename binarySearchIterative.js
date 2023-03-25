function binarySearch(arr, num){
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while(right >= left){
        mid = left + Math.floor((right - left) / 2);

        if(arr[mid] === num)
          return mid;

        if(arr[mid] > num)
          right = mid - 1;
          
        else
          left = mid + 1;  
    }
    return -1;
}

let arr = [-5, -1, 2, 3, 7, 8, 10, 27]
let num = 10;
console.log(binarySearch(arr, num))