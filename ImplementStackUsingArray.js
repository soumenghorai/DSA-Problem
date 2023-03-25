let MAX_VAL = 100 //Max size of stack
let arr = new Array(MAX_VAL).fill(0)
var top = -1 //Initial value of top

function push(data){
    if(top >= MAX_VAL - 1){
        console.log("Stack overflow")
        return false
    }else{
        top++
        arr[top] = data
        return true
    
    }
}

function pop(){
    if(top < 0){
        console.log("Stack underflow")
        return Number.MIN_VALUE
    }else{
        let topElement = arr[top]
        return topElement
    }
}

function printStack(){
    for(let i = top; i > -1; i--){
        console.log(arr[i])
    }
}

push(100)
push(200)
push(300)
push(400)

printStack()