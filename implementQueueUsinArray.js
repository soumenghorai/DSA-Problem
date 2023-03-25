//Implement a queue using an array
class Queue {
    constructor(MAX_SIZE){
        this.front = 0
        this.rear = 0
        this.maxSize = MAX_SIZE
        this.queue = new Array(this.maxSize)
    }

      //Enqueue - inserting an element at the rear end of the queue
      queueEnqueue(data){
         //Check if the queue is full or not
         if(this.maxSize === this.rear){
            console.log("Overflow")
            return
         }else{
            this.queue[this.rear] = data;
            this.rear++
         }
      }

        //Dequeue(this is not doubly-ended-queue) - deleting an element from the front end of the queue
        queueDequeue(){
            let dequeueElement;
            //If queue is empty
            if(this.front === this.rear){
                console.log("Underflow")
                return
            }else{
                dequeueElement = this.queue[this.front]
                 //Shift all the elements by one position toward the left
                 for(let i = 0; i < this.rear - 1; i++){
                    this.queue[i] = this.queue[i + 1]
                 }

                 this.queue[this.rear - 1] = null

                 this.rear--;
            }
            return dequeueElement
        }
}
//Invoke
let q = new Queue(5)
q.queueEnqueue(12)
q.queueEnqueue(121)
q.queueEnqueue(1222)
q.queueEnqueue(12134)
q.queueEnqueue(1213489)

// console.log(q.queue)
q.queueDequeue()
console.log(q.queue)