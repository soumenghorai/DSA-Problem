//Count sort for negative integers
function countSort(arr){
    let min = arr.reduce((a, b) => Math.min(a, b))
    let max = arr.reduce((a, b) => Math.max(a, b))
    let countArray = new Array(max - min + 1).fill(0)
    let outputArray = new Array(arr.length)
    
    for(let i = 0; i < arr.length; i++){
      let indexInCountArray = arr[i] - min
      countArray[indexInCountArray] = countArray[indexInCountArray] + 1
    }
    
    for(let i = 1; i < countArray.length; i++){
      countArray[i] = countArray[i] + countArray[i - 1]
    }
    
    //Iterate from the end in the original array
    for(let i = arr.length - 1; i >= 0; i--){
      let pos = countArray[arr[i] - min] - 1
      outputArray[pos] = arr[i]
      countArray[arr[i] - min] = pos
    }
    
    return outputArray
  }
  
  console.log(countSort([0, 9, -1, 2, 3, -3, -1, 5, 0, -2]))
  