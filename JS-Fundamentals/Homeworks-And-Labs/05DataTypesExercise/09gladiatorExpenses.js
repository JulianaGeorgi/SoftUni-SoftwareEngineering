function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let brokenHelmets = 0;
    let brokenSwords = 0;
    let brokenShields = 0;
    let brokenArmor = 0;
    let expenses = 0;

    for (i = 1; i <= lostFightsCount; i++) {

        if (i % 2 === 0 && i % 3 === 0) {
            brokenShields++;
            brokenHelmets++;
            brokenSwords++;

            if (brokenShields % 2 === 0) {
                brokenArmor++;
            }
            continue;

        } else if (i % 2 === 0) {
            brokenHelmets++;

        } else if (i % 3 === 0) {
            brokenSwords++;
        }
    }  
    console.log(`Gladiator expenses: ${(expenses = helmetPrice * brokenHelmets + swordPrice * brokenSwords + shieldPrice * brokenShields + armorPrice * brokenArmor).toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);