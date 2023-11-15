function calculateCircleArea(radius: number): number {
    const area = 3.14159 * radius * radius;
    return Number(area.toFixed(2));
}

console.log(calculateCircleArea(5));