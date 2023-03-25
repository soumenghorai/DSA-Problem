function checkSquareNew(array1, array2){
     
    let map1 = {}
    let map2 = {}

    for(let item1 of array1){
        map1[item1] = (map1[item1] || 0) + 1;
    }
    console.log("Map1",map1);

    for(let item2 of array2){
        map2[item2] = (map2[item2] || 0) + 1;
    }
    console.log("Map2",map2);

    for(let key in map1){
        console.log("key",key)
        if(!map2[key * key]){
            return false;
        }
        if(map1[key] !== map2[key * key]){
            return false;
        }
    }
    return true;
}
let result = checkSquareNew([1,2,4,2],[1,4,4,16]);
console.log(result);