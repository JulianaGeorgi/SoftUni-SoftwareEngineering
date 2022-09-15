function circleArea(input){

    let circleArea = 0;

    if(typeof(input) !== 'number' ){
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
    } else {
        circleArea = Math.PI *input * input;
        console.log(circleArea.toFixed(2));
    }

}

circleArea(5);
circleArea('name');