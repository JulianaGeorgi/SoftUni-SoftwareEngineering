function solve() {
  let buttons = document.querySelectorAll('button');

  buttons[0].addEventListener('click', generate);
  buttons[1].addEventListener('click', buy);

  function generate() {
    let currentItems = JSON.parse(document.querySelectorAll('textarea')[0].value); // getting the json object that we get from the text area and we parse it to get an array
    let tableBody = document.getElementsByTagName('tbody')[0]; // getting the table body 
    for (let item of currentItems) { 
      let tableRow = document.createElement('tr'); // creating a new row for each item
      tableRow.innerHTML = // for every table row we add more html
        `<td><img src="${item.img}"></td>` +
        `<td><p>${item.name}</p></td>` +
        `<td><p>${item.price}</p></td>` +
        `<td><p>${item.decFactor}</p></td>` +
        `<td><input type='checkbox'></td>`;
      tableBody.appendChild(tableRow); // we add it to the table body
    }
  }


  function buy() {
    let resultArea = document.querySelectorAll('textarea')[1]; // getting the result area
    let table = Array.from(document.querySelectorAll("tbody tr")); // from the table, getting all table rows (the products)
    let res = [];
    for (let el of table) { // converting the data from the table to an object that will be save in the res array
      if (el.querySelector('input[type=checkbox]:checked')) { // checking if there is a checked box 
        let tableData = Array.from(el.querySelectorAll('td')); // getting all the table data fields (we don't need 0 as it's the image)
        let info = { // creating an object 
          name: tableData[1].children[0].textContent, 
          price: tableData[2].children[0].textContent,
          decFactor: tableData[3].children[0].textContent
        }
        res.push(info); // adding the object to the array
      }
    }

    let names = '';
    let totalPrice = 0;
    let decFactor = 0;

    for (let i = 0; i < res.length; i++) { //
      let item = res[i]; // getting the object from the array
      let sep = i == res.length - 1 ? '' : ', '; // put coma everywhere except after the last element
      names += item.name + sep;
      totalPrice += Number(item.price);
      decFactor += Number(item.decFactor);
    }
    decFactor /= res.length;
    resultArea.value = `Bought furniture: ${names}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor}`;
  }
}