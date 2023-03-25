class Node{
    constructor(d){
      this.data = d
      this.next = null
    }
  }
  
  function rearrange(head){
    let dequeue = []
    let temp = head
    
    while(temp != null){
      dequeue.push(temp.data)
      temp = temp.next
    }
    
    let dequeueLength = dequeue.length
    let index = 0
    temp = head
    while(index < dequeueLength){
      if(index % 2 === 0){
        temp.data = dequeue.shift()
      } else {
        temp.data = dequeue.pop()
      }
      index++
      temp = temp.next
    }
    
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
  head.next.next.next.next = new Node(500)
  head.next.next.next.next.next = new Node(600)
  
  printLinkedList(rearrange(head))
  