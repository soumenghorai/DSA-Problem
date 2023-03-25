function binarySearch(arr, num, left, right){
    if(right >= left){
        let mid = left + Math.floor((right - left) / 2);

        if(arr[mid] === num){
            return mid;
        }

        if(arr[mid] > num){
            return binarySearch(arr, num, left, mid - 1);
        }else{
            return binarySearch(arr, num, mid + 1, right);
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 2, 2, 2, 2, 2, 4], 2, 0, 8));