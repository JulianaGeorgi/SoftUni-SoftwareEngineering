function convertToObject(jsonData){

    let person = JSON.parse(jsonData); // turn from string to object 

    for(let key of Object.keys(person)){
        console.log(`${key}: ${person[key]}`)
    }

}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');