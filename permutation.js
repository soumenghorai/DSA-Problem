function permutation(result, arr, bag, map) {
  if(bag.length == arr.length) {
      result.push(bag.join(""));
      return;
  }
  for(let i = 0; i<arr.length; i++) {
      if(!map[i]) {
          bag.push(arr[i]);
          map[i] = true;
          permutation(result, arr, bag, map);
          bag.pop();
          map[i] = false;
      }
  }
  return result;
}


let str = "abc";
permutation([], str.split(""), [], {});
console.log(permutation([], str.split(""), [], {}));
  