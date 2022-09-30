function filterEmployees(data, criteria) {

    let employeesData = JSON.parse(data);
    const [key, value] = criteria.split('-');
    let res = [];
    let counter = 1;

    for (let i = 0; i < employeesData.length; i++) {
        if (employeesData[i][key] === value) {
            let newObj = {
                listNum: `${counter}` + '.',
                firstName: employeesData[i]['first_name'],
                lastName: employeesData[i]['last_name'],
                email: employeesData[i]['email']
            };
            res.push(newObj);
            counter++;
        }
    }

    res.forEach(function (obj) {
        console.log(`${obj.listNum} ${obj.firstName} ${obj.lastName} - ${obj.email}`)
    })
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);

console.log("---------------");

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
);