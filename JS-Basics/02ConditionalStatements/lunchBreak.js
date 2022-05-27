function lunchBreak(input){

    let tvShowName = (input[0]);
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration * 1/8;
    let relaxTime = breakDuration * 1/4;
    let timeToWatchShow = breakDuration - lunchTime - relaxTime;

    if(timeToWatchShow >= episodeDuration){
        console.log(`You have enough time to watch ${tvShowName} and left with ${Math.ceil(timeToWatchShow - episodeDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${tvShowName}, you need ${Math.ceil(episodeDuration - timeToWatchShow)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones","78","60"]);



function lunchBreak(input){

    let tvShowName = (input[0]);
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration * 1/8;
    let relaxTime = breakDuration * 1/4;
    let timeToWatchShow = breakDuration - lunchTime - relaxTime;

    let leftTime = Math.ceil(episodeDuration - timeToWatchShow);
    let extraTime = Math.ceil(timeToWatchShow - episodeDuration);

    if(episodeDuration <= timeToWatchShow){
        console.log(`You have enough time to watch ${tvShowName} and left with ${extraTime} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${tvShowName}, you need ${leftTime} more minutes.`);
    }
}