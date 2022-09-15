function aggregateElements(arr) {

    let sum = 0;
    let inverseSum = 0;

    function getSum(array) {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    function getInverseSum(array) {
        for (let i = 0; i < array.length; i++) {
            inverseSum += 1 / array[i]
        }

        return inverseSum;
    }

    function concatenate(array) {
        let string = array.join("");
        return string;
    }

    console.log(getSum(arr));
    console.log(getInverseSum(arr));
    console.log(concatenate(arr));
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);