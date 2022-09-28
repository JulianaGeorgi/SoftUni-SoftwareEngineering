function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll('input[type=button]')); // getting all buttons

    for (let button of buttons) {
        button.addEventListener('click', convert); // adding event listener to all buttons
    }

    function convert(event) {
        let value = Number(event.target.parentElement.querySelector('input[type=text]').value);
        let unit = event.target.id; // to get from where it comes from exactly

        switch (unit) {
            case 'dayBtn':
                populate(value)
                break;
            case 'hoursBtn':
                populate(value / 24);
                break;
            case 'minutesBtn':
                populate(value / 24 / 60);
                break;
            case 'secondsBtn':
                populate(value / 24 / 60 / 60);
                break;
        }
    }
    function populate(value) { // putting the new values to the fields
        let inputs = Array.from(document.querySelectorAll('input[type=text]'));
        inputs.shift().value = value; // removing the days 
        let currentValue = value * 24; // getting the hours 
        for (let input of inputs) {
            input.value = currentValue;
            currentValue *= 60; // calculating the minutes and the seconds
        }
    }
}