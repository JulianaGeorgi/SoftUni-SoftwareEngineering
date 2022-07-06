function addressBook(data){

    let result = {};

    for(let line of data){
        let [name, address] = line.split(":");
        result[name] = address;
    }

    let unsortedKey = Object.keys(result); // array with keys 
    let sortKey = unsortedKey.sort((a,b)=> a.localeCompare(b)); // doesn't refelect on the object

    for(let key of sortKey){
        console.log(key, "->", result[key]);
    }
    

    // let entries = Object.entries(result);
    // let sortEntries = entries.sort(([keyA, valueA], [keyB, valueB]) => { // сортираме два съседни елемнта в един масив
    //     return keyA.localeCompare(keyB);
    // });

    // for(let [name, address] of sortEntries){
    //     console.log(name, "->", address);
    // }

}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);