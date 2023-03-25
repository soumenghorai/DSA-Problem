//Bucket sort for floating numbers uniformly distributed between a range of 0.0 - 1.0
function bucketSort(arr){
    //Create n = 10 buckets
    let buckets = new Array(10)
    
    for(let i = 0; i < buckets.length; i++){
      buckets[i] = []
    }
    
    //Put the elements of the array in their respective buckets
    for(let i = 0; i < arr.length; i++){
      let bucketIndex = Math.floor(arr[i] * 10)
      buckets[bucketIndex].push(arr[i])
    }
    
    //Sort those buckets which contain more than one element
    for(let i = 0; i < buckets.length; i++){
      if(buckets[i].length > 1){
        buckets[i].sort((a, b) => a - b)
      }
    }
   
    let index = 0
    for(let i = 0; i < buckets.length; i++){
      for(let j = 0; j < buckets[i].length; j++){
        arr[index] = buckets[i][j]
        index++
      }
    }
    
    return arr
  }
  
  //Invoke
  console.log(bucketSort([0.23, 0.19, 0.27, 0.6, 0.4, 0.89, 0.91, 0.29, 0.86]))
  