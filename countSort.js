//This array only contains positive integers
function countSort(arr){
    let max = arr.reduce((a, b) => Math.max(a, b))
    let countArray = new Array(max + 1).fill(0)
    let outputArray = new Array(arr.length)
    let index = 0
    
    for(let i = 0; i < arr.length; i++){
      countArray[arr[i]] = countArray[arr[i]] + 1
    }
    
    for(let i = 1; i < arr.length; i++){
      countArray[i] = countArray[i] + countArray[i - 1]
    }
    
    //Iterate over the original array from the end
    for(let i = arr.length - 1; i >= 0; i--){
      let pos = countArray[arr[i]] - 1
      outputArray[pos] = arr[i]
      countArray[arr[i]] = pos
    }
    
    //Naive approach
  //   for(let i = 0; i < countArray.length; i++){
  //     if(countArray[i] > 0){
  //       let count = countArray[i]
  //       while(count > 0){
  //         outputArray[index] = i
  //         count--;
  //         index++
  //       }
  //     }
  //   }
    
    return outputArray
  }
  
  console.log(countSort([2, 2, 1, 3, 4, 1, 0, 1, 9, 0]))
  