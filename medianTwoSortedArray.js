//Merge two sorted arrays
function median(A, B){
    let n = A.length;
    let m = B.length;

    if(n > m){
        return median(B, A)
    }


    let l = 0
    let r = n
    let medianInMergedArray = Math.floor((n + m + 1) / 2)
    
    while(l <= r){
      let mid = l + Math.floor((r - l) / 2)
      let sizeLeftA = mid;
      let sizeLeftB = medianInMergedArray - mid
      let leftA, leftB, rightA, rightB
      
      if(sizeLeftA > 0){
        leftA = A[sizeLeftA - 1]
      }else{
        leftA = Number.MIN_VALUE
      }
      //leftA = (sizeLeftA > 0) ? A[sizeLeftA - 1] : Number.MIN_VALUE
      
      if(sizeLeftB > 0){
        leftB = B[sizeLeftB - 1]
      }else{
        leftB = Number.MIN_VALUE
      }
      
      if(sizeLeftA < n){
        rightA = A[sizeLeftA]
      }else{
        rightA = Number.MAX_VALUE
      }
      
      if(sizeLeftB < m){
        rightB = B[sizeLeftB]
      }else{
        rightB = Number.MAX_VALUE
      }
      
      if(leftA <= rightB && leftB <= rightA){
        if((m + n) % 2 === 0)
          return Math.floor((Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2)
        else
          return Math.max(leftA, leftB)
      }
      
      else if(leftA > rightB){
        r = mid - 1
      }
      
      else{
        l = mid + 1
      }  
    }
    
    return -1
  }
  
  //Invoke
  console.log(median([-5, 3, 6, 12, 15],[-12, -10, -6, -3, 4, 10]))
  