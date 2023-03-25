//Check is a string is balanced parantheses or not
function isBalancedParentheses(expression){
    let stack = []

    for(let i = 0; i < expression.length; i++){
        let element = expression[i]

         //If you encounter an opening bracket
         if(element === '(' || element === '{' || element === '['){
            stack.push(element)
            continue;
         }

         //If you encounter a closing bracket
         else{
            if(element === ')'){
                let top = stack.pop()
                if(top === '{' || top === '[')
                    return false
            }else if(element === '}'){
                let top = stack.pop()
                if(top === '(' || top === '[')
                    return false
            }else if(element === ']'){
                let top = stack.pop()
                if(top === '(' || top === '{')
                    return false
            }

         }
    }
    if(stack.length === 0)
        return true
}
console.log(isBalancedParentheses("[{()}]"))