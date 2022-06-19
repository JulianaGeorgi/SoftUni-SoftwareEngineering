function myMap(el,predicate){
    let res =[];
    res.push(predicate(el))
    return res;
}

myMap();