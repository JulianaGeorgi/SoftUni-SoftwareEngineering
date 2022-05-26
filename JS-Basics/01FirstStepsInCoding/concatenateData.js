function concatenateData(input){
    let firstName = (input[0]);
    let lastName = (input[1]);
    let age = (input[2]);
    let hometown = (input[3]);
    let res = `You are ${firstName} ${lastName}, a ${age}-years old person from ${hometown}.`
    console.log(res)
}

concatenateData(["Juliana", "Georgieva", 30, "Sofia"]);