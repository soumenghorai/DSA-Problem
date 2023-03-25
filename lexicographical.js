function printLexicographical(n){
    for(let i = 1; i <= 9; i++){
      printLexicographicalRecursive(i, n)
    }
  }
  
  function printLexicographicalRecursive(i, n){
    if(i > n)
      return
    
    console.log(i)
    for(let j = 0; j < 10; j++){
      printLexicographicalRecursive(10 * i + j, n)
    }
  }
  
  //Invoke
  printLexicographical(25)
  