function binarySearch(array, number){
    let min = 0;
    let max = array.length-1;

    while(min <= max){
        let mid = Math.floor((min + max) / 2);

        if(array[mid] < number){
            min = mid + 1;
        }else if(array[mid] > number){
            max = mid - 1;
        }else{
            return mid
        }
    }
    return -1;
}
let result = binarySearch([1,2,3,4,5,6,7,8,9,10,12,13,14,15],7);
console.log(result)