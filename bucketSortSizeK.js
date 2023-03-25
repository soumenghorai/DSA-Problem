//Bucket sort on an array of integers where size of each bucket is k
function bucketSort(arr, k){
    let min = arr.reduce((a, b) => Math.min(a, b))
    let max = arr.reduce((a, b) => Math.max(a, b))
    let bucketCount = Math.floor((max - min) / k) + 1
    
    let buckets = new Array(bucketCount)
    
    for(let i = 0; i < buckets.length; i++){
      buckets[i] = []
    }
    
    //Iterate over our original array and put each element in their respective bucket
    for(let i = 0; i < arr.length; i++){
      let bucketIndex = Math.floor((arr[i] - min) / k)
      buckets[bucketIndex].push(arr[i])
    }
    
    //Iterate over the buckets and sort the bucket which has more than one element
    for(let i = 0; i < buckets.length; i++){
      if(buckets[i].length > 1){
        buckets[i].sort((a, b) => a -b)
      }
    }
    
    //Gather back all the elements from buckets into our original array
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
  console.log(bucketSort([32, 6, -34, 6767, -8, 90, 21], 5))
  