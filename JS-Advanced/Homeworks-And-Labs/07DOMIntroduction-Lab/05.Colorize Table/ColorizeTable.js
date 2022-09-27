function colorize() {

    let tableElements = document.getElementsByTagName('tr');
    let tableArray = [...tableElements];

    tableArray.forEach((element, index) => {
        if(index % 2 !== 0){
            element.style.backgroundColor = "Teal"
        }
    });
    console.log(tableArray);
}