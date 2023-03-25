function maximalRectangle(matrix){
    let rows = matrix.length
    let cols = matrix[0].length

      //No of rows in height matrix will be equal to number of rows in the matrix
      let height = new Array(rows)
      for(let i = 0; i < rows; i++){
        height[i] = new Array(cols)
      }

      //Calculate the height matrix
      for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(matrix[i][j] === 1){
                if(i === 0){
                    height[i][j] = 1
                }else{
                    height[i][j] = height[i - 1][j] + 1
                }
            }else{
                height[i][j] = 0
            }
        }
      }

      let maxArea = 0;
      for(let i = 0; i < rows; i++){
        maxArea = Math.max(maxArea, maximumAreaHistogram(height[i]))
      }
      return maxArea
}

function maximumAreaHistogram(arr){
    let maxArea = 0
    
    let left_smaller = leftSmallerIndex(arr)
    let right_smaller = rightSmallerIndex(arr)
    
    for(let i = 0; i < arr.length; i++){
      maxArea = Math.max(maxArea, arr[i] * (right_smaller[i] - left_smaller[i] -1))
    }
    
    return maxArea
  }
  
  //Next/Right smaller index
  function rightSmallerIndex(arr){
    let s = []
    let ans = new Array(arr.length).fill(arr.length)
    s.push(0)
    
    for(let i = 1; i < arr.length; i++){
      //Popping strategy: if the current element in iteration is smaller the element on top of stack then we have found our next smaller element for the element on top of stack. Keep popping until this is true
      while(s.length != 0 && arr[s[s.length - 1]] > arr[i]){
        ans[s[s.length -1]] = i
        s.pop()
      }
      
      s.push(i)
    }
    
    return ans
  }
  
  //Previous/Left smaller index
  function leftSmallerIndex(arr){
    let s = []
    let ans = new Array(arr.length).fill(-1)
    
      for(let i =0; i < arr.length; i++){
      //Popping strategy: keep popping elements from stack until the stack is empty OR the element on top of stack is greater than the element in iteration
      while(s.length != 0 && arr[s[s.length - 1]] >= arr[i]){
        s.pop()
      }
      
      if(s.length > 0){
        ans[i] = s[s.length - 1]
      }
      
      s.push(i)
    }
    
    return ans
  }
  
  
  let matrix = [
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 0, 0]
  ]
  
  console.log(maximalRectangle(matrix))
  