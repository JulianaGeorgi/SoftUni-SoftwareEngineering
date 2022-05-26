function password(input) {

    let index = 0;
    let name = input[index];
    index++;
    let pass = input[index];
    index++;

    let tempPassword = input[index];
    index++;

    while (tempPassword !== pass) { // ако върне фолс, спира
        tempPassword = input[index];
        index++;
    }
    console.log(`Welcome ${name}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);