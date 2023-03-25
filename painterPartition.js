function paintersPartition(arr, k){
    let l = arr[arr.length - 1]
    let r = arr.reduce((a, b) => a + b)
    
    let ans = -1
    while(r >= l){
      let mid = l + Math.floor((r - l) / 2)
      
      if(isPainterAllocationPossible(arr, mid, k)){
        ans = mid
        r = mid - 1
      }else{
        l = mid + 1
      }
    }
    
    return ans
  }
  