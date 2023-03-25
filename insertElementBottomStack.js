//Insert an element at the bottom of the stack
function insertElementAtTheButtom(stack, element){
    //Temporary stack
    let tempStacked = []

      //Pop elements from the original stack and push it onto the tempStack until the original stack is empty
      while(stack.length != 0){
        let poppedElement = stack.pop()
        tempStacked.push(poppedElement)
      }

      //Push the element ath the bottom in the original stack
      stack.push(element)

      //Pop elements from the tempStack and push it onto the original stack until the tempStack is empty
      while(tempStacked != 0){
        let poppedElement = tempStacked.pop()
        stack.push(poppedElement)
      }
      return stack
}

let stack = [5, 6, 8, 2, 7, 3]
console.log(insertElementAtTheButtom(stack, 9))