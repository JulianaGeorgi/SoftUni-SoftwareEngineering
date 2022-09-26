function toggle() {
    
    let button = document.getElementsByClassName('button')[0];
    let hiddenText = document.getElementById('extra');

    if (button.textContent === 'More') {
        button.textContent = 'Less';
        hiddenText.style.display = 'block';
      } else {
        button.textContent = 'More';
        hiddenText.style.display = 'none';
      }
}