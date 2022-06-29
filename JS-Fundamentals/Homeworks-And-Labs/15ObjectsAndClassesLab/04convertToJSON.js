function convertToJSON(name, lastName, hairColor){

    let res = {
        name: name,
        lastName, 
        hairColor
    }

    let resAsString = JSON.stringify(res);
    console.log(resAsString);

}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');