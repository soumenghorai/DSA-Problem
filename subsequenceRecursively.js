function printSubsequence(arr, index, subsequence){
    if(index === arr.length){
        if(subsequence > 0){
            console.log(subsequence);
        }
    }else{
        printSubsequence(arr, index + 1, subsequence)

        subsequence.push(arr[index]);
        printSubsequence(arr, index + 1, subsequence)
        subsequence.pop()
    }
    return
}
printSubsequence([1,2,3,],0,[])