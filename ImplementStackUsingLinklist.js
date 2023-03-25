class Node{
    constructor(d){
        this.data = d
        this.next = null
    }
}

class StackUsingLinklist{
    constructor(){
        this.size = 0
        this.top = null
    }

    push(data){
        if(this.size + 1 > MAX_VAL){
            console.log("Stack overflow")
            return false
        }
        this.size++
        let newNode = new Node(data)
        newNode.next = this.top;
        this.top = newNode;
    }

    pop(){
        if(this.size < 0){
            console.log("Stack underflow")
            return Number.MIN_VALUE
        }else{
            this.size--;
            this.top = this.top.next
        }
    }

    peek(){
        if(this.top === null){
            return Number.MIN_VALUE
        }
        return this.top.data
    }

    printStack(){
        let temp = this.top;
        while(temp != null){
            console.log(temp.data)
            temp = temp.next
        }
    }
}

var MAX_VAL = 100
let s = new StackUsingLinklist()
s.push(100)
s.push(200)
s.push(300)
s.push(400)
s.printStack()

s.pop()
//s.printStack()
s.peek()

