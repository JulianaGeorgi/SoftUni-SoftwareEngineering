function newHouse(input) {

    let flowerType = (input[0]);
    let flowersCount = Number(input[1]); // парсване
    let budget = Number(input[2]);
    let totalSum = 0;

    switch (flowerType) {

        case "Roses":
            totalSum = flowersCount * 5;
            if (flowersCount > 80) {
                totalSum = totalSum * 0.9; // 10% discount
            }
            break;

        case "Dahlias":
            totalSum = flowersCount * 3.80;
            if (flowersCount > 90) {
                totalSum = totalSum * 0.85;
            }
            break;

        case "Tulips":
            totalSum = flowersCount * 2.80;
            if (flowersCount > 80) {
                totalSum = totalSum * 0.85;
            }
            break;

        case "Narcissus":
            totalSum = flowersCount * 3;
            if (flowersCount < 120) {
                totalSum = totalSum * 1.15; // gets more expensive by 15%; 115%
            }
            break;

        case "Gladiolus":
            totalSum = flowersCount * 2.5;
            if (flowersCount < 80) {
                totalSum = totalSum * 1.20; // gets more expensive by 15%; умножаваме по 120%
            }
            break;
    }

    if (budget >= totalSum) {
console.log(`Hey, you have a great garden with ${flowersCount} ${flowerType} and ${(budget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);
    }
}


newHouse(["Roses", "55", "250"]);