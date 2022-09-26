function addItem() {
    let newItemValue = document.getElementById('newItemText').value;
    let liItem = document.createElement('li');
    liItem.textContent = newItemValue;
    document.appendChild(liItem);
}