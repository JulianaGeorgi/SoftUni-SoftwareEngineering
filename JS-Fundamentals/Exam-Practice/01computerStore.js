function computerStore(array) {

    let index = 0;
    let command = array[index];
    let price = 0;
    let taxes = 0;
    let totalPrice = 0;
    let priceWithTaxes = 0;

    while (command !== 'special' && command !== "regular") {

        price = Number(array[index]);

        if (price < 0) {
            console.log("Invalid price!");
        } else {
            totalPrice += price;
        }

        index++;
        command = array[index];
    }

    if (totalPrice === 0) {
        console.log("Invalid order!");
        return;
    }

    taxes = (totalPrice * 0.2);
    priceWithTaxes = totalPrice + taxes;

    if (command === "special") {
        discount = (priceWithTaxes * 0.1);
        priceWithTaxes = priceWithTaxes - discount;

    }

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
    console.log(`Taxes: ${(taxes).toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${priceWithTaxes.toFixed(2)}$`);

}

computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
computerStore(['regular']);