// function main(first, second, third) {

//     let sumFirstAndSecond = sum(first, second);
//     let finalResult = subtract(sumFirstAndSecond, third);

//     console.log(finalResult);

//     function sum(first, second) {
//         return first + second;
//     }

//     function subtract(sumFirstAndSecond, thirdNumber) {
//         return sumFirstAndSecond - thirdNumber;
//     }
// }

// main(23, 6, 10);


function main(first, second, third) {


    let sum = (first, second) => {
        return first + second;
    }

    let subtract = (sumFirstAndSecond, thirdNumber) => {
        return sumFirstAndSecond - thirdNumber;
    }

    let sumFirstAndSecond = sum(first, second);
    let finalResult = subtract(sumFirstAndSecond, third);

    console.log(finalResult);
}


main(23, 6, 10);