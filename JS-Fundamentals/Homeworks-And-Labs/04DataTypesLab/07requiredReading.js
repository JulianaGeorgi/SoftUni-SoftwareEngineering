function requiredReading(pageCount,pagesReadPerHour,daysAvailable){

    let readingDuration = pageCount / pagesReadPerHour;
    let toReadPerDay = readingDuration / daysAvailable;

    console.log(toReadPerDay);
}

requiredReading(432,15,4);