function cinemaTickets(input) {

    let index = 0;
    let command = input[index];

    let studentCounter = 0;
    let standardCounter = 0;
    let kidsCounter = 0;
    let totalTicketsCounter = 0;

    while (command !== "Finish") {

        let filmName = command;
        index++;
        let seatsAv = Number(input[index]);
        index++;
        let ticketType = input[index];
        let ticketCounter = 0; // за всеки един филм

        while (ticketType !== "End") {

            ticketCounter++;

            switch (ticketType) {
                case "student":
                    studentCounter++;
                    break;
                case "standard":
                    standardCounter++;
                    break;
                case "kid":
                    kidsCounter++;
                    break;
            }

            if (ticketCounter >= seatsAv) {
                break;
            }

            index++;
            ticketType = input[index]; // or input[++index]; и без горния ред индекс++
        }
        totalTicketsCounter += ticketCounter;
        let resultSingleFilm = ticketCounter / seatsAv * 100;

        console.log(`${filmName} - ${resultSingleFilm.toFixed(2)}% full.`);
        command = input[++index];

    }

    console.log(`Total tickets: ${totalTicketsCounter}`);
    console.log(`${(studentCounter / totalTicketsCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter / totalTicketsCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsCounter / totalTicketsCounter * 100).toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);