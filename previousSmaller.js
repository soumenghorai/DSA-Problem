//Previous/Left smaller index
function leftSmallerIndex(arr){
    let stack = []
    let ans = new Array(arr.length).fill(-1)

    for(let i = 0; i < arr.length; i++){
          //Popping strategy: keep popping elements from stack until the stack is empty OR the element on top of stack is greater than the element in iteration
          while(stack.length != 0 && arr[stack[stack.length - 1]] >= arr[i]){
            stack.pop()
          }
          if(stack.length > 0){
            ans[i] = stack[stack.length - 1]
          }
          stack.push(i)
    }
    return ans
}
console.log(leftSmallerIndex([1, 2, 3, 4, 2, 0, 6]))