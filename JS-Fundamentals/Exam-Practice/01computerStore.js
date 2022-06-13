function computerStore(array) {

    let index = 0;
    let command = array[index];
    let price = 0;
    let taxes = 0;
    let totalWithoutTaxes = 0;
    let totalWithTaxes = 0;

    while (command !== 'special' && command !== "regular") {

        price = Number(array[index]);

        if (price < 0) {
            console.log("Invalid price!");
        } else {
            totalWithoutTaxes += price;
        }

        index++;
        command = array[index];
    }

    if (totalWithoutTaxes === 0) {
        console.log("Invalid order!");
        return;
    }

    taxes = (totalWithoutTaxes * 0.2);
    totalWithTaxes = totalWithoutTaxes + taxes;

    if (command === "special") {
        discount = (totalWithTaxes * 0.1);
        totalWithTaxes = totalWithTaxes - discount;

    }

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${(taxes).toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalWithTaxes.toFixed(2)}$`);

}

computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
// computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
// computerStore(['regular']);