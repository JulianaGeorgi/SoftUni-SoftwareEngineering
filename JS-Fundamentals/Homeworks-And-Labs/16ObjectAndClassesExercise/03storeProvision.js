function storeProvision(currentStock, forDelivery){

    let storeProducts = {};
    let currentL = currentStock.length;
    let forDeliveryL = forDelivery.length;

    for(let index = 0; index < currentL; index += 2){ // за да обходим само продуктите
        let product = currentStock[index];

        storeProducts[product] = Number(currentStock[index +1]); // количеството само го взимаме и го добавяме
    }

    for(let i = 0; i < forDeliveryL; i +=2){
        let product = forDelivery[i];

        if(!storeProducts.hasOwnProperty(product)){ // като includes, само че за обекти
            storeProducts[product] = 0; // ако го няма
        }

        storeProducts[product] += Number(forDelivery[i + 1]); // ако го има, ъпдейтваме стойността
    }

    for(const product in storeProducts){
        console.log(`${product} -> ${storeProducts[product]}`);
    }

}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);

storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);