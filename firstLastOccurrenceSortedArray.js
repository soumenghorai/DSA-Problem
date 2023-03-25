function firstOccurrence(arr, left, right, num){
    if(right >= left){
        let mid = left + Math.floor((right - left) / 2);

        if((mid === 0 || arr[mid - 1] < num) && arr[mid] === num)
          return mid;

        else if(arr[mid] < num)
          return firstOccurrence(arr, mid + 1, right, num)
         
          else
            return firstOccurrence(arr, left, mid - 1, num)  
            
    }
    return -1;
}
// function lastOccurrence(arr, left, right, num){
//     if(right >= left){
//         let mid = left + Math.floor((right - left) / 2);

//         if((mid === arr.length - 1 || arr[mid + 1] > num) && arr[mid] === num)
//           return mid;

//         else if(arr[mid] > num)
//           return lastOccurrence(arr, left, mid - 1, num)  
        
//         else
//           return lastOccurrence(arr, mid + 1, right, num)
            
//     }
//     return -1;
// }

let array = [-1, 0, 1, 2, 5, 5, 5, 5, 5, 5, 10, 15, 16, 17]
console.log(firstOccurrence(array, 0, array.length - 1, 5));
