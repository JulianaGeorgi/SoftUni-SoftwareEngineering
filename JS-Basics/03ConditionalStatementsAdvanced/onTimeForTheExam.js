function onTimeForTheExam(input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]); //при такъв тип задачи - трябва да сведеш до една мерна единица - винаги се свежда до по-малката!!!!!!!!!!! 

    let timeExam = examHour * 60 + examMin;
    let timeArrive = arrivalHour * 60 + arrivalMinute;

    let time = Math.abs(timeArrive - timeExam); // връща винаги положително

    let h = Math.floor(time / 60);
    let min = time % 60;


    if (timeExam < timeArrive) { // първо описваме основните сценарии
        console.log("Late");

        if (time >= 60) {
           
            if (min < 10) {
                console.log(`${h}:0${min} hours after the start`);
            } else {
                console.log(`${h}:${min} hours after the start`);
            }
        } else {
            console.log(`${time} minutes after the start`);
        }

    } else if (timeArrive === timeExam || timeExam - timeArrive <= 30) {
        console.log("On time");

        if (time !== 0) {
            console.log(`${time} minutes before the start`);
        }
    } else {
        console.log("Early");

        if (time >= 60) {
           
            if (min < 10) {
                console.log(`${h}:0${min} hours before the start`);
            } else {
                console.log(`${h}:${min} hours before the start`);
            }
        } else {
            console.log(`${time} minutes before the start`);
        }
    }
}

onTimeForTheExam(["9", "00", "8", "00"]); //35