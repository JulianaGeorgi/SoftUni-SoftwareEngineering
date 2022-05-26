function demo(input) {

    let name = "Ivo";

    switch (name) { // променлива, която ще проверявамe; работи по-добре със стрингове!! при работа с числа - иф,елсе 

        case "Asq": console.log("Asq is here ***"); break; // спира проверките надолу
        case "Ivo": console.log("Ivo is here!"); break;
        default: console.log(`${name} is here`); break;
    }

}
demo(); // ctrl + x =delete line
