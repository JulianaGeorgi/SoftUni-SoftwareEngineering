function theAngryCat(prices, entryIndex, itemsType) {

    let rightSide = prices.slice(entryIndex + 1); // cutting without the entryIndex till the end
    let leftSide = prices.slice(0, entryIndex); // cutting from start till the entryIndex (exclusive)

    let rightSideDamage = 0;
    let leftSideDamage = 0;

    for (let i = 0; i < rightSide.length; i++) { // looping through the right array

        if (rightSide[i] < prices[entryIndex] && itemsType === "cheap") {
            rightSideDamage += rightSide[i];
        } else if (rightSide[i] >= prices[entryIndex] && itemsType === "expensive") {
            rightSideDamage += rightSide[i];
        }
    }

    for (let i = 0; i < leftSide.length; i++) { // looping through the left array
        if (leftSide[i] >= prices[entryIndex] && itemsType === "expensive") { // only getting items higher than the value of the entryIndex
            leftSideDamage += leftSide[i];
        } else if (leftSide[i] < prices[entryIndex] && itemsType === "cheap") { //only getting items lower than the value of the entryIndex
            leftSideDamage += leftSide[i];
        }
    }


    if (rightSideDamage > leftSideDamage) {
        console.log(`Right - ${rightSideDamage}`);
    } else if (rightSideDamage <= leftSideDamage) {
        console.log(`Left - ${leftSideDamage}`);
    }
}

theAngryCat([1, 5, 1], 1, "cheap");
theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");