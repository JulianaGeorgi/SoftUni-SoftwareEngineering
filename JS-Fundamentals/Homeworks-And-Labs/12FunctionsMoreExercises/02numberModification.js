function numberModification(num) {

    let array = String(num).split("").map(Number);

    let average = array.reduce((a, b) => a + b, 0) / array.length;

    if(average < 5){
        array.push(9);
    } else {
        return array.join('');
    }

   return numberModification(array.join(''));
    
}

console.log(numberModification(101));
console.log(numberModification(5835));