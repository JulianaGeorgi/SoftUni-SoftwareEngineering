function solve(text, convention) {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;

  if (convention !== 'Camel Case' && convention !== 'Pascal Case') {
    return document.getElementById('result').textContent = 'Error!';
  }

  let words = text
    .toLowerCase()
    .split(' ');

  for (let i = 0; i < words.length; i++) {
    if (i !== 0 || convention === 'Pascal Case') { // by Camel Case will not enter only by the first word; otherwise by both convention the first letter has to be capital
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); // makes the first letter capital and joins it with the rest of the word
    }
  }
  document.getElementById('result').textContent = words.join('');
}

solve("this is an example", "Camel Case");
solve("secOND eXamPLE", "Pascal Case");