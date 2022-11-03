document.getElementById("form").addEventListener("submit", onSubmit);

//getting the existing student database to be displayed when page is loaded
async function onLoad() {
  const response = await fetch('http://localhost:3030/jsonstore/collections/students');
  const data = await response.json();

  Object.values(data).forEach(student => createTableRow(student));
}
onLoad();

//creating the table and displaying the students in the table 
function createTableRow(student){
  const table = document.querySelector('tbody');
  const tr = document.createElement('tr');
  tr.innerHTML = `
                    <td>${student.firstName}</td>
                    <td>${student.lastName}</td>
                    <td>${student.facultyNumber}</td>
                    <td>${student.grade}</td>`;
  table.appendChild(tr);
}

//collecting all the values from the input fields
async function onSubmit(event){
  event.preventDefault();
  const formData = new FormData(event.target);
  const {firstName, lastName, facultyNumber, grade} = Object.fromEntries(formData.entries());

  const result = await submitData({firstName, lastName, facultyNumber, grade}); // posting the new entry in the database
  createTableRow(result); // sending the new entry to the function that will display it in the table
}

//making a post request for the new entry 
async function submitData(newEntry){
  const response = await fetch ('http://localhost:3030/jsonstore/collections/students', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newEntry)
  });
  debugger;

  const data = await response.json(); // here we already have the database _id created
  return data;
}