class Node {
    constructor(d){
      this.data = d;
      this.next = null
    }
  }
  
  function reverseLinkedList(head){
    let prev = null
    let curr = head
    while(curr != null){
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    //Update our head
    head = prev
    
    return head
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
  
  let newHead = reverseLinkedList(head)
  printLinkedList(newHead)
  