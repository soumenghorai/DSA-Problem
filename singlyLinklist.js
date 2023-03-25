class Node{
    constructor(d){
      this.data = d;
      this.next = null
    }
  }
  
  class LinkedList{
    constructor(){
      this.head = null
      this.size = 0
    }
    
    //Add element at the end of the list
    addElementAtLast(element){
      //Create a new node
      let newNode = new Node(element)
      this.size++;
      
      //Iterate over the linked list until we reach the end
      let temp = null
      if(this.head == null){
        this.head = newNode;
      }else{
        temp = this.head;
        
        while(temp.next != null){
          temp = temp.next
        }
        
        temp.next = newNode
      }
    }
    
    //Print the list
    print(){
      let temp = this.head;
      let output = []
      while(temp != null){
        output.push(temp.data)
        temp = temp.next
      }
      return output
    }
    
    //Add element at a particular index
    addElementAtIndex(element, index){
      if(index < 0 || index > this.size){
        return
      }
      
      let newNode = new Node(element)
      this.size++
      let curr = this.head
      let prev
      
      if(index === 0){
        newNode.next = this.head
        this.head = newNode
      }else{
        let i = 0
        
        while(i < index){
          i++;
          prev = curr
          curr = curr.next
        }
        
        newNode.next = curr
        prev.next = newNode
      }
    }
    
    removeElementIndex(index){
      if(index < 0 || index >= this.size){
        return
      }
      
      let curr = this.head;
      let prev
      
      if(index === 0){
        this.head = curr.next
      } else {
        let i = 0
        while(i < index){
          i++;
          prev = curr
          curr = curr.next
        }
        
        prev.next = curr.next
      }
      this.size--
    }
  }
  
  
  let ll = new LinkedList()
  ll.addElementAtLast("Jeevendra")
  ll.addElementAtLast("John")
  ll.addElementAtLast("Jenny")
  ll.addElementAtIndex("Jennifer", 2)
  ll.removeElementIndex(1)
  ll.print()
  console.log(ll)
  