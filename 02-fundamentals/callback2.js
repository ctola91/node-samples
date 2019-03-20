let employees = [
  {
    id: 1,
    name: "christian"
  },
  {
    id: 2,
    name: "juan"
  },
  {
    id: 3,
    name: "jose"
  }
];

let salaries = [
  {
    id: 1,
    salary: 1000
  },
  {
    id: 2,
    salary: 2000
  }
];

let getEmployee = (id, callback) => {
    let employeeDB = employees.find(employee => employee.id === id);

    if(!employeeDB) {
        callback(`Does not exist employee with id: ${id}`);
    }
    else {
        return callback(null, employeeDB);
    }
}

let getSalary = (employee, callback) => {
    let salaryDB = salaries.find(salary => salary.id === employee.id);

    if(!salaryDB) {
        callback(`Does not exist salary for employee ${employee.name}`);
    }
    else {
        callback(null, {
            name: employee.name,
            salary: salaryDB.salary,
            id: employee.id
        });
    }
}


getEmployee(1, (err, employee) => {
    if (err) {
        return console.log(err);
    }

    getSalary(employee, (err, salary) => {
        if(err) {
            return console.log(err);
        }
        console.log(salary);
    })
});