function listOfProducts(products) {

    let sortedProducts = products.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < sortedProducts.length; i++) {

        let numberedProduct = `${i + 1}.${sortedProducts[i]}`;
        console.log(numberedProduct);
    }
    
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);