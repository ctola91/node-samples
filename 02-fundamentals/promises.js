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

let getEmployee = id => {
  return new Promise((resolve, reject) => {
    let employeeDB = employees.find(employee => employee.id === id);

    if (!employeeDB) {
      reject(`Does not exist employee with id: ${id}`);
    } else {
      return resolve(employeeDB);
    }
  });
};

let getSalary = employee => {
  return new Promise((resolve, reject) => {
    let salaryDB = salaries.find(salary => salary.id === employee.id);

    if (!salaryDB) {
      reject(`Does not exist salary for employee ${employee.name}`);
    } else {
      resolve({
        name: employee.name,
        salary: salaryDB.salary,
        id: employee.id
      });
    }
  });
};

getEmployee(1)
  .then(employee => {
    console.log(employee);
    getSalary(employee)
    .then(salary => console.log('Salary from employee: ', salary))
    .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
