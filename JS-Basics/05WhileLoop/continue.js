function solve(){
    let i =1; 

    while(i<=10){
        if(i % 2 !==0){
            i++;
            continue; // прекъсва текущата итерация и започва цикъла отначало (пропуска кода по-долу)
        }

        console.log(i);
        i++;
    }
}
solve()