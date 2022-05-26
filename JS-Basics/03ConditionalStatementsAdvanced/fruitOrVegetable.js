function fruitOrVegetable(input) {

    let productName = (input[0]);

    switch (productName) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon": 
        case "grapes": console.log("fruit"); break;
        case "cucumber": 
        case "pepper": 
        case "carrot": 
        case "tomato": console.log("vegetable"); break;
        default: console.log("unknown");
    }
}

fruitOrVegetable(["peach"]);