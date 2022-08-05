function heroesOfCodeAndLogic(data) {

    let numOfHeroes = Number(data.shift());
    let heroesList = {};

    for (let i = 0; i < numOfHeroes; i++) {
        let [hero, hitPoints, mana] = data[i].split(" ");
        if (!heroesList[hero]) {
            heroesList[hero] = [];
            heroesList[hero].push(Number(hitPoints), Number(mana));
        }
    }

    for (let i = numOfHeroes; i < data.length; i++) {
        let [action, currentHero, pam1, pam2] = data[i].split(" - ");

        switch (action) {
            case "CastSpell":
                let manaNeeded = Number(pam1);
                let spell = pam2;
                if (heroesList[currentHero][1] >= manaNeeded) {
                    heroesList[currentHero][1] -= manaNeeded;
                    console.log(`${currentHero} has successfully cast ${spell} and now has ${heroesList[currentHero][1]} MP!`);
                } else {
                    console.log(`${currentHero} does not have enough MP to cast ${spell}!`);
                }
                break;
            case "TakeDamage":
                let damage = Number(pam1);
                let attacker = pam2;
                heroesList[currentHero][0] -= damage;
                if (heroesList[currentHero][0] > 0) {
                    console.log(`${currentHero} was hit for ${damage} HP by ${attacker} and now has ${heroesList[currentHero][0]} HP left!`);
                } else {
                    delete heroesList[currentHero];
                    console.log(`${currentHero} has been killed by ${attacker}!`);
                }
                break;
            case "Recharge":
                let rechargeAmount = Number(pam1);
                heroesList[currentHero][1] += rechargeAmount;
                if (heroesList[currentHero][1] >= 200) {
                    rechargeAmount = heroesList[currentHero][1] - 200 - rechargeAmount;
                    heroesList[currentHero][1] = 200;
                }
                console.log(`${currentHero} recharged for ${Math.abs(rechargeAmount)} MP!`);
                break;
            case "Heal":
                let healAmount = Number(pam1);
                heroesList[currentHero][0] += healAmount;
                if (heroesList[currentHero][0] > 100) {
                    healAmount = heroesList[currentHero][0] - 100 - healAmount;
                    heroesList[currentHero][0] = 100;
                }
                console.log(`${currentHero} healed for ${Math.abs(healAmount)} HP!`);
                break;
        }
    }

    for (const key in heroesList) {
        console.log(key);
        console.log(`  HP: ${heroesList[key][0]}`);
        console.log(`  MP: ${heroesList[key][1]}`);
    }
}

heroesOfCodeAndLogic(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End",
]);

console.log("--------------------");

heroesOfCodeAndLogic(["4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]);