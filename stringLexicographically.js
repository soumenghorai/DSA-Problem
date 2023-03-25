//Sort a string in lexicographical order using Count sort
// let str = "Aa ijfgjfglkfgfzZ"

// console.log(str.charCodeAt(0)) //65 - A
// console.log(str.charCodeAt(str.length - 1)) //90 - Z
// console.log(str.charCodeAt(1)) //97 - a
// console.log(str.charCodeAt(str.length - 2)) //122 - z
// console.log(str.charCodeAt(2)) //32 - space

//Create a count array of length 123 we can sort a string lexicographically that contains character between A-Z and a-z
function sortLexicographically(str){
    let countArray = new Array(123).fill(0)
    let outputArray = new Array(str.length)
    
    for(let i = 0; i < str.length; i++){
      countArray[str.charCodeAt(i)] = countArray[str.charCodeAt(i)] + 1
    }
    
    //Add previous count
    for(let i = 1; i < countArray.length; i++){
      countArray[i] = countArray[i] + countArray[i - 1]
    }
    
    //Iterate over the original string from the end to start
    for(let i = str.length - 1; i >= 0; i--){
      let pos = countArray[str.charCodeAt(i)] - 1
      outputArray[pos] = str[i]
      countArray[str.charCodeAt(i)] =  pos
    }
    
    return outputArray.join("")
  }
  
  //Invoke
  console.log(sortLexicographically("chatgpt"))
  