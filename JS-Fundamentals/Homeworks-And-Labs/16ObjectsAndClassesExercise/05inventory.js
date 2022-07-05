function inventory(arr){

    let heroes = [];

    for(let heroInfo of arr){
        let [name, level, items] = heroInfo.split(" / ");

        let currentHero = {
            name: name, 
            level: +level, // parse to Number 
            items: items
        }; 

        heroes.push(currentHero);
    }

    let sortedByLevel = heroes.sort((a,b) => {
        return a.level - b.level;
    });

    for (let hero of sortedByLevel){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

}

inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
inventory(['Batman / 2 / Banana, Gun',
'Superman / 18 / Sword',
'Poppy / 28 / Sentinel, Antara']);