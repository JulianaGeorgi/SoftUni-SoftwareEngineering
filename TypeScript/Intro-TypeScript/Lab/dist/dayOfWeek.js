"use strict";
function dayOfWeek(day) {
    let DaysOfWorkWeek;
    (function (DaysOfWorkWeek) {
        DaysOfWorkWeek[DaysOfWorkWeek["Monday"] = 1] = "Monday";
        DaysOfWorkWeek[DaysOfWorkWeek["Tuesday"] = 2] = "Tuesday";
        DaysOfWorkWeek[DaysOfWorkWeek["Wednesday"] = 3] = "Wednesday";
        DaysOfWorkWeek[DaysOfWorkWeek["Thursday"] = 4] = "Thursday";
        DaysOfWorkWeek[DaysOfWorkWeek["Friday"] = 5] = "Friday";
        DaysOfWorkWeek[DaysOfWorkWeek["Saturday"] = 6] = "Saturday";
        DaysOfWorkWeek[DaysOfWorkWeek["Sunday"] = 7] = "Sunday";
    })(DaysOfWorkWeek || (DaysOfWorkWeek = {}));
    const res = DaysOfWorkWeek[day];
    if (res !== undefined) {
        return res;
    }
    else {
        return "Error: Unrecognized day of the week.";
    }
}
console.log(dayOfWeek("Funday"));
console.log(dayOfWeek("Friday"));
//# sourceMappingURL=dayOfWeek.js.map