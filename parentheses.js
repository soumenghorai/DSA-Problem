function printParantheses(paranthesesArray, index, open, close, n){
    if(close === n){
        if(paranthesesArray.join('') != "")
           console.log(paranthesesArray.join(''))
       return;
    }else{
        if(open < n){
            paranthesesArray[index] = '('
            printParantheses(paranthesesArray, index + 1, open + 1, close, n)
        }

        if(open > close){
            paranthesesArray[index] = ')'
            printParantheses(paranthesesArray, index + 1, open, close + 1, n)
        }
    }
}

let n = 3;
let paranthesesStr = new Array(2 * n)
printParantheses(paranthesesStr, 0, 0, 0, n)