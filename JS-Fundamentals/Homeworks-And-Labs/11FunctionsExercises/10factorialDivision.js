// function factorialDivision(num1, num2){

//   let multiplier1 = num1 - 1;
//   let res1 = num1;

//   for(let i = multiplier1; i > 0; i--){
//     res1*= i;
//   }

//   let multiplier2 = num2 - 1;
//   let res2 = num2;

//   for(let i = multiplier2; i > 0; i--){
//     res2*= i;
//   }

//   console.log((res1/res2).toFixed(2));
// }

// factorialDivision(5,2);
// factorialDivision(6,2);

function factorialDivision(num1, num2) {

    let factorialOfNum1 = getFactorial(num1);
    let factorialOfNum2 = getFactorial(num2);

    console.log((factorialOfNum1/factorialOfNum2).toFixed(2));

    function getFactorial(number) {

        if(number === 0){
            return 1;
        } else {
            return number * getFactorial(number - 1);
        }

    }
}
factorialDivision(5, 2);
factorialDivision(6, 2);