function lowestPriceInCities(data) {

    let res = {};
    for (let el of data) {
        let [town, product, price] = el.split(" | ");
        price = Number(price);

        if (res.hasOwnProperty(product)) { // does this property exist
            let currentPrice = res[product]["price"]; // we get the price from product which is an object and that's why we have to call the price with ""
            if (currentPrice > price) { // if the price we already have saved is bigger, we will replace it with the new lower one
                res[product] = { town, price } // replacing with the new town and lower price
            }
        } else {
            res[product] = { town, price } // product is an object inside res with two properties
        }
    }

    for (let [product, value] of Object.entries(res)) {
        console.log(`${product} -> ${value.price} (${value.town})`);
    }
}

console.log(lowestPriceInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']));