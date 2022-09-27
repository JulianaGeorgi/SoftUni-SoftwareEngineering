function sumTable() {

    let rows = document.getElementsByTagName("td");
    let rowsArray = [...rows];
    let sum = 0;

    for (let i = 0; i < rowsArray.length - 1; i++) {
        if (i % 2 !== 0) {
            sum += Number(rowsArray[i].innerText);
        }
    }

    document.getElementById('sum').textContent = sum;
}