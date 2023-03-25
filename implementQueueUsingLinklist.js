class Node{
    constructor(d){
      this.data = d;
      this.next = null
    }
  }
  
  class Queue{
    constructor(MAX_SIZE){
      this.front = null
      this.rear = null
      this.size = MAX_SIZE
    }
    
    queueEnqueue(data){
          //Create a new node
      let newNode = new Node(data)
      
      //If the queue is empty
      if(this.rear === null){
        this.front = this.rear = newNode
        return
      } else{
        this.rear.next = newNode
        this.rear = newNode
      }
    }
    
    queueDequeue(){
      if(this.front === null)
        return;
      
      let temp = this.front
      this.front = this.front.next
      
      //If after dequeuing your front becomes null, then we will make rear also null
      if(this.front == null)
        this.rear = null
        
      return temp.data
    }
  }
  
  //Invoke
  let q = new Queue(5)
  q.queueEnqueue(21)
  q.queueEnqueue(31)
  q.queueEnqueue(41)
  q.queueEnqueue(51)
  
  console.log(q)
  
  console.log(q.queueDequeue())
  