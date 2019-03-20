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
  
  let getEmployee = async id => {
      let employeeDB = employees.find(employee => employee.id === id);
  
      if (!employeeDB) {
        throw new Error(`Does not exist employee with id: ${id}`);
      } else {
        return employeeDB;
      }
  };
  
  let getSalary = async employee => {
      let salaryDB = salaries.find(salary => salary.id === employee.id);
  
      if (!salaryDB) {
        throw new Error(`Does not exist salary for employee ${employee.name}`);
      } else {
        return {
          name: employee.name,
          salary: salaryDB.salary,
          id: employee.id
        };
      }
  };
  
let getInformation = async (id) => {
    let employee = await getEmployee(id);
    let resp = await getSalary(employee)
    return `${employee.name} has a salary of ${resp.salary}$`
}

getInformation(1).then(res => console.log(res))
    .catch(err => console.log(err));