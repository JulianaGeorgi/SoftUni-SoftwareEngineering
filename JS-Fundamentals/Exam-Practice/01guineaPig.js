// On the first three lines, you will receive the quantity of food, hay, and cover, which Merry buys for a month (30 days). On the fourth line, you will receive the guinea pig's weight.
// Every day Puppy eats 300 gr of food. Every second day Merry first feeds the pet, then gives it a certain amount of hay equal to 5% of the rest of the food. On every third day, Merry puts Puppy cover with a quantity of 1/3 of its weight.
// Calculate whether the quantity of food, hay, and cover, will be enough for a month.
// If Merry runs out of food, hay, or cover, stop the program!
// Input
// •	On the first line – quantity food in kilograms - a floating-point number in the range [0.0 – 10000.0]
// •	On the second line – quantity hay in kilograms - a floating-point number in the range [0.0 – 10000.0]
// •	On the third line – quantity cover in kilograms - a floating-point number in the range [0.0 – 10000.0]
// •	On the fourth line – guinea's weight in kilograms - a floating-point number in the range [0.0 – 10000.0]
// Output
// •	If the food, the hay, and the cover are enough, print:
// o	"Everything is fine! Puppy is happy! Food: {excessFood}, Hay: {excessHay}, Cover: {excessCover}."
// •	If one of the things is not enough, print:
// o	"Merry must go to the pet store!"
// The output values must be formatted to the second decimal place!


function guineaPig(array) {

    let food = Number(array[0]);
    let hay = Number(array[1]);
    let cover = Number(array[2]);
    let pigWeight = Number(array[3]);
    let month = 30;

    for (i = 1; i <= month; i++) {
        food -= 0.3;

        if (i > 1 && i % 2 === 0) {
            hay = hay - (food * 0.05);
        }


        if (i % 3 === 0) {
            cover = cover - (pigWeight / 3);
        }
    }

    if (food <= 0 || hay <= 0 || cover <= 0) {
        console.log("Merry must go to the pet store!");

    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
    }

}

guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);