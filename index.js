import { testframework } from "./testframework.js";
import WageEmployee from "./WageEmployee.js";
import Employee from "./employee.js";
import Manager from "./Manager.js";
import Company from "./Company.js";


const myCompany = new Company();

myCompany.addEmployee(new Employee("John", 1000, "IT"));
myCompany.addEmployee(new Manager("Jane", 1400, "finance", 40, 1.8));
myCompany.addEmployee(new WageEmployee("Jack", 1200, "IT", 100, 200));
myCompany.addEmployee(new WageEmployee("Jill", 1300, "Sales", 80, 120));

testframework(
  "Company tests",
  `
  const myCompany = new Company();
  
  myCompany.addEmployee(new Employee("John", 1000, "IT"));
  myCompany.addEmployee(new Manager("Jane", 1400, "finance", 40, 1.8));
  myCompany.addEmployee(new WageEmployee("Jack", 1200, "IT", 100, 200));
  myCompany.addEmployee(new WageEmployee("Jill", 1300, "Sales", 80, 120));
  `,
  [
    `myCompany.getDepBudget("IT")`,
    `myCompany.getDepBudget("finance")`,
    `myCompany.getDepBudget("Sales")`,
    `myCompany.getEmployeesMaxSalary()`,
    `myCompany.getEmployeesMaxSalary()[0].name`,
    `myCompany.getEmployeesDepartment("IT")`,
    `myCompany.getEmployeesDepartment("Sales")`,
    `myCompany.getEmployeesDepartment("finance").length`,
    `myCompany.deleteEmployee("John").employees`,
  ],
  [
    22200,
    56000,
    10900,
    [{ name: "Jane", basicSalary: 1400, department: "finance", factor: 40 }],
    "Jane",
    [
      { name: "John", basicSalary: 1000, department: "IT" },
      {
        name: "Jack",
        basicSalary: 1200,
        department: "IT",
        hours: 100,
        wage: 200,
      },
    ],
    [
      {
        name: "Jill",
        basicSalary: 1300,
        department: "Sales",
        hours: 80,
        wage: 120,
      },
    ],
    1,
    {
      Jane: {
        name: "Jane",
        basicSalary: 1400,
        department: "finance",
        factor: 40,
      },
      Jack: {
        name: "Jack",
        basicSalary: 1200,
        department: "IT",
        hours: 100,
        wage: 200,
      },
      Jill: {
        name: "Jill",
        basicSalary: 1300,
        department: "Sales",
        hours: 80,
        wage: 120,
      },
    },
  ]
);



