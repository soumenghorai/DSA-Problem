function splitArray(arr, k){
    let start = arr.reduce((a, b) => Math.max(a, b))
    let end = arr.reduce((a, b) => a + b)
    
    let ans = 0;
    
    while(start <= end){
      let mid = start + Math.floor((end - start) / 2)
      
      if(verify(arr, mid, k)){
        ans = mid;
        end = mid - 1
      }
      else{
        start = mid + 1
      }
    }
    
    return ans
  }
  
  function verify(arr, mid, k){
    let count = 0
    let sum = 0
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > mid)
        return false
      
      sum = sum + arr[i]
      
      if(sum > mid){
        count++
        sum = arr[i]
      }
    }
    count++;
    
    if(count <= k)
      return true
    return false
  }
  
  
  //Invoke
  console.log(splitArray([1, 2, 3, 4], 3))
  