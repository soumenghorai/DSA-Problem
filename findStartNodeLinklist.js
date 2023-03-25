//Find the first node in the loop using Tortoise and Hare approach

class Node {
    constructor(d){
      this.data = d
      this.next = null
    }
  }
  
  function firstNodeInTheLoop(head){
    if(head == null || head.next == null)
      return null
    
    let slow = head
    let fast = head
    
    slow = slow.next
    fast = fast.next.next
    
    while(fast != null && fast.next != null){
      if(slow == fast)
        break;
      slow = slow.next
      fast = fast.next.next
    }
    
    if(slow != fast)
      return null
    
    //If there is a loop
    slow = head
    while(slow != fast){
      slow = slow.next
      fast = fast.next
    }
    
    return slow
  }
  
  
  //Invoke
  let head = new Node(100)
  head.next = new Node(200)
  head.next.next = new Node(300)
  head.next.next.next = new Node(400)
  head.next.next.next.next = new Node(500)
  head.next.next.next.next.next = new Node(600)
  
  head.next.next.next.next.next.next = head.next.next
  
  console.log(firstNodeInTheLoop(head).data)
  
  