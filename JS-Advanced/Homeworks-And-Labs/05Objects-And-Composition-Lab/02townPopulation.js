function townPopulation(data){

    let townRecord = {};

    for(let i = 0; i< data.length; i++){
        let [town, population] = data[i].split(" <-> ");
        population = Number(population);

        if(townRecord[town] !== undefined){
            population += townRecord[town];
        }
        townRecord[town] = population;
    }

    for(let town in townRecord){
        console.log(`${town} : ${townRecord[town]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);