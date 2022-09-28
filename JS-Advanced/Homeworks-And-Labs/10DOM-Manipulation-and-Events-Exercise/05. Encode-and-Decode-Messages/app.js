function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode(e) {
        let newMessage = '';
        let textAreas = document.querySelectorAll('textarea');
        let currentText = textAreas[0].value;

        for (let i = 0; i < currentText.length; i++) {
            let currentChar = currentText[i].charCodeAt();
            newMessage += String.fromCharCode(currentChar + 1);
        }
        
        let resultTextArea = textAreas[1];
        resultTextArea.value = newMessage;
        let currentTextArea = textAreas[0];
        currentTextArea.value = '';
    }

    function decode(e) {
        let currentArea = e.target.parentElement.children[1];
        let currentText = currentArea.value;
        let resultMessage = '';

        for (let i = 0; i < currentText.length; i++) {
            let char = currentText[i].charCodeAt();
            resultMessage += String.fromCharCode(char - 1);
        }
        currentArea.value = resultMessage;
    }
}