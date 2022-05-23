function vacation(numOfPeople, typeOfGroup, dayOfWeek) {

    let totalPrice = 0;

    if (typeOfGroup === "Students") {

        switch (dayOfWeek) {
            case "Friday":
                totalPrice = numOfPeople * 8.45;
                break;
            case "Saturday":
                totalPrice = numOfPeople * 9.80;
                break;
            case "Sunday":
                totalPrice = numOfPeople * 10.46;
                break;
        }

        if (numOfPeople >= 30) {
            totalPrice *= 0.85;
        }

    } else if (typeOfGroup === "Business") {

        if (numOfPeople >= 100) {

            switch (dayOfWeek) {
                case "Friday":
                    totalPrice = (numOfPeople - 10) * 10.90;
                    break;
                case "Saturday":
                    totalPrice = (numOfPeople - 10) * 15.60;
                    break;
                case "Sunday":
                    totalPrice = (numOfPeople - 10) * 20;
                    break;
            }

        } else {
            switch (dayOfWeek) {
                case "Friday":
                    totalPrice = numOfPeople * 10.90;
                    break;
                case "Saturday":
                    totalPrice = numOfPeople * 15.60;
                    break;
                case "Sunday":
                    totalPrice = numOfPeople * 16;
                    break;
            }
        }


    } else if (typeOfGroup === "Regular") {

        switch (dayOfWeek) {
            case "Friday":
                totalPrice = numOfPeople * 15;
                break;
            case "Saturday":
                totalPrice = numOfPeople * 20;
                break;
            case "Sunday":
                totalPrice = numOfPeople * 22.50;
                break;
        }

        if(numOfPeople>= 10 && numOfPeople<=20){
            totalPrice *= 0.95;
        }


    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

vacation(40, "Regular", "Saturday");