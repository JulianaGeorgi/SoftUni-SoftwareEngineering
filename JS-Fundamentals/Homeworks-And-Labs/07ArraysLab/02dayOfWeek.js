function dayOfWeek(n) {

    if (n < 1 || n > 7) {
        console.log("Invalid day!");

    } else {
        let dayNameArray = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ]
        console.log(dayNameArray[n - 1]);

    }
}

dayOfWeek(0);