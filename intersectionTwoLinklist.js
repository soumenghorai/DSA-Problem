//Write a program to find the intersection of two linked lists
class Node{
    constructor(d){
      this.data = d;
      this.next = null
    }
  }
  
  
  function getIntersection(head1, head2){
    let s = new Set()
    let temp = head1
    //Insert all the reference of first linked list in the set
    while(temp != null){
      s.add(temp)
      temp = temp.next
    }
    
    temp = head2
    while(temp != null){
      if(s.has(temp))
        return temp
      temp = temp.next
    }
    
    return null
  }
  
  //Invoke
  let head1 = new Node(100)
  head1.next = new Node(200)
  head1.next.next = new Node(300)
  head1.next.next.next = new Node(400)
  head1.next.next.next.next = new Node(500)
  
  let head2 = new Node(1)
  head2.next = new Node(2)
  head2.next.next = head1.next.next
  
  console.log(getIntersection(head1, head2).data)
  