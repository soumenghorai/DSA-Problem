//Next greater element using stack by pushing the element
function nextGreaterElement(arr){
    let s = []
    
    //Push the first element from the arr onto the stack
    s.push(arr[0])
    
    //Iterate from the second element till the last element in the array
    for(let i = 1; i < arr.length; i++){
      
      //Keep popping the elements which are smaller than the current element in iteration
      //This our popping strategy
      while(s.length > 0 && arr[s[s.length - 1]] < arr[i]){
        console.log("Next greater element of " + s[s.length - 1] + " is " +  arr[i])
        s.pop()
      }
      
      s.push(arr[i])
    }
    
    //If there are elements left in stack pop them and assign -1
    while(s.length != 0){
      console.log("Next greater element of " + s[s.length - 1] + " is -1")
      s.pop()
    }
  }
  
  //Invoke
  nextGreaterElement([3, 9, 13, 2, 10, 0])
  