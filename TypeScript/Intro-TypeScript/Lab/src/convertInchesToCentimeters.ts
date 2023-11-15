function convertInchesToCentimeters (inches: number): number {
    const resInCentimeters: number = inches * 2.54;

    return resInCentimeters;
}

console.log(convertInchesToCentimeters(5));
console.log(convertInchesToCentimeters(7));