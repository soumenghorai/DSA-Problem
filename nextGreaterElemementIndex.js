//Next greater element using stack by pushing the index
function nextGreaterElement(arr){
    let stack = []
    let ans = new Array(arr.length).fill(-1)

      //Push the first element from the arr onto the stack
      stack.push(0)

       //Iterate from the second element till the last element in the array
       for(let i = 1; i < arr.length; i++){

        //Keep popping the elements which are smaller than the current element in iteration
        //This our popping strategy
        while(stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]){
            ans[stack[stack.length - 1]] = arr[i]
            stack.pop()
        } 
        stack.push(i)

       }
       return ans
}
console.log(nextGreaterElement([3, 9, 13, 2, 6, 0]))