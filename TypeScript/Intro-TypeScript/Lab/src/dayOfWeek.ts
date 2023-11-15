function dayOfWeek(day: string): number | string {
    enum DaysOfWorkWeek {
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6,
        Sunday = 7,
    }

    const res = DaysOfWorkWeek[day as keyof typeof DaysOfWorkWeek];
    
    if (res !== undefined) {
        return res;
    } else {
        return "Error: Unrecognized day of the week.";
    }
}

console.log(dayOfWeek("Funday"));
console.log(dayOfWeek("Friday"));