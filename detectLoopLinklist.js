class Node{
    constructor(d){
      this.data = d
      this.next = null
    }
  }
  
  function detectLoop(head){
    let s = new Set();
    let temp = head
    
    while(temp != null){
      if(s.has(temp))
        return true
      s.add(temp)
      temp = temp.next
    }
    
    return false
  }
  
  function printLinkedList(head){
    let temp = head
    while(temp != null){
      console.log(temp.data)
      temp = temp.next
    }
  }
  
  
  //Invoke
  let head = new Node(100)
  head.next = new Node(200)
  head.next.next = new Node(300)
  head.next.next.next = new Node(400)
  head.next.next.next.next = new Node(500)
  head.next.next.next.next.next = new Node(600)
  //Pointing the next of last node to the third node
  head.next.next.next.next.next.next = head.next.next.next
  console.log(detectLoop(head));
  