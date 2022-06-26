function theAngryCat(priceRatings, entryPoint, itemsType) {

    let rightSide = priceRatings.slice(entryPoint + 1);
    let leftSide = priceRatings.slice(0, entryPoint);

    let rightSideDamage = 0;
    let leftSideDamage = 0;

    for (let i = 0; i < rightSide.length; i++) {

        if (rightSide[i] < priceRatings[entryPoint] && itemsType === "cheap") {
            rightSideDamage += rightSide[i];
        } else if (rightSide[i] >= priceRatings[entryPoint] && itemsType === "expensive"){
            rightSideDamage += rightSide[i];
        }
    }

    for (let i = 0; i < leftSide.length; i++) {
        if (leftSide[i] >= priceRatings[entryPoint] && itemsType === "expensive") {
            leftSideDamage += leftSide[i];
        } else if( leftSide[i] < priceRatings[entryPoint] && itemsType === "cheap"){
            leftSideDamage += leftSide[i];
        }
    }


    if (rightSideDamage > leftSideDamage) {
        console.log(`Right - ${rightSideDamage}`);
    } else if (rightSideDamage <= leftSideDamage) {
        console.log(`Left - ${leftSideDamage}`);
    }
}

// theAngryCat([1, 5, 1], 1, "cheap");
theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");