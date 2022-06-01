function primeNumberChecker(num){

    let prime = true;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            prime = false;
            break;
        }
    }
    if(prime){
        console.log("true");
    } else{
        console.log("false");
    }
}

primeNumberChecker(7);