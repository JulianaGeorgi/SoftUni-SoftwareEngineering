function fishTank(input) {

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);

    let volume = lenght * width * height;
    let volumeInLiters = (volume * 0.001);

    let waterNeeded = volumeInLiters * (1 - 0.17);
    
    console.log(waterNeeded);
    

}
fishTank(["85 ", "75 ", "47 ", "17 "]);