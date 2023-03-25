function isAllocationPossible(arr, mid, k){
    let countOfStudents = 1
    let sum = 0
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > mid)
        return false
      
      if(sum + arr[i] > mid){
        countOfStudents++
        sum = arr[i]
        
        //If the students required becomes greater than give number of students, return 			false
        if(countOfStudents > k)
          return false
      } else {
        sum = sum + arr[i]
      }
    }
    
    return true
  }
  
  function bookAllocation(arr, k){
    //If number of books is less than number of students, return -1
    if(arr.length < k){
      return -1;
    }
    
    let l = arr[arr.length - 1]
    let r = arr.reduce((a, b) => a + b)
    let ans = Number.MAX_VALUE
    
    while(r >= l){
      let mid = l + Math.floor((r - l) / 2)
      
      if(isAllocationPossible(arr, mid, k)){
        ans = mid
        r = mid - 1
      }else{
        l = mid +  1
      }
    }
    
    return ans
  }
  
  //Invoke
  console.log(bookAllocation([12, 34, 67, 90], 2))
  