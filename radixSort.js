//Radix sort
/*
1. Get the count of digits in a number
2. Get the maxdigit in an array of number
3. Get digit based on place value
*/

function digitCount(num){
    let count = 0
    if(num === 0)
      return 1
    
    while(num != 0){
      num = Math.floor(num / 10)
      count++
    }
    
    return count
  }
  
  function maxDigits(arr){
    let maxDigits = 0
    let max = arr.reduce((a, b) => Math.max(a, b))
    return digitCount(max)
  }
  
  function getDigit(num, place){
    let digit = 0
    let i = 0
    while(i < place){
      digit = num % 10
      num = Math.floor(num / 10)
      i++
    }
    
    return digit
  }
  
  
  function radixSort(arr){
    let maxDigitCount = maxDigits(arr)
    
    //Bucket our elements
    for(let k = 1; k <= maxDigitCount; k++){
      
      //Initialize our bucket
      let buckets = new Array(10)
      for(let i = 0; i < buckets.length; i++){
        buckets[i] = []
      }
      
      //Iterate over the original array and place the digits in the bucket(LSD to MSD)
      for(let i = 0; i < arr.length; i++){
        let digit = getDigit(arr[i], k)
        buckets[digit].push(arr[i])
      }
      
      //Gather back the elements from the bucket into our original array
      arr = []
      for(let i = 0; i < buckets.length; i++){
        for(let j = 0; j < buckets[i].length; j++){
          arr.push(buckets[i][j])
        }
      }
    }
    
    return arr
  }
  
  //Invoke
  console.log(radixSort([23, 1, 9, 456, 7123, 99, 4]))
  