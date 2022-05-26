function cinema(input) {

    let projection = input[0];
    let cinemaRows = (input[1]);
    let cinemaColumns = (input[2]);
    let income = 0;

    switch (projection) {
        case "Premiere":
            income = (cinemaRows * cinemaColumns) * 12.00;
            console.log(`${income.toFixed(2)} leva`);
            break;
        case "Normal":
            income = (cinemaRows * cinemaColumns) * 7.50;
            console.log(`${income.toFixed(2)} leva`);
            break;
        case "Discount":
            income = (cinemaRows * cinemaColumns) * 5.00;
            console.log(`${income.toFixed(2)} leva`);
            break;

    }

}

cinema(["Normal","21","13"]);