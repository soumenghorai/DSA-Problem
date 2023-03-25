//Next/Right smaller index
function rightSmallerIndex(arr){
    let stack = []
    let ans = new Array(arr.length).fill(arr.length)
    stack.push(0)

    for(let i = 0; i < arr.length; i++){
         //Popping strategy: if the current element in iteration is smaller the element on top of stack then we have found our next smaller element for the element on top of stack. Keep popping until this is true
         while(stack.length != 0 && arr[stack[stack.length - 1]] > arr[i]){
            ans[stack[stack.length - 1]] = i
            stack.pop()
         }
         stack.push(i)
    }
    return ans
}

console.log(rightSmallerIndex([5, 4, 3, 2, 1, 6, 19, 0]))