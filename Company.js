export default class Company {
  constructor() {
    this.employees = {}; 
  }

  addEmployee(empl) {
    this.employees[empl.name] = empl;
  }

  deleteEmployee(emplName) {
    delete this.employees[emplName];
    return { employees: this.employees };
  }

  getDepBudget(department) {
    let budget = this.getEmployeesDepartment(department)
    .reduce((acc, empl) => acc + empl.computeSalary(), 0);
    return budget;
  
  }
  getEmployeesMaxSalary() {
    const maxSalary = Math.max(
      ...Object.values(this.employees).map((empl) => empl.computeSalary())
    );
    let employees = Object.values(this.employees).filter(
      (empl) => empl.computeSalary() === maxSalary
    );

   
    return employees;
  }
    getEmployeesDepartment(department) {
    return Object.values(this.employees).filter(
      (empl) => empl.department === department
    );
  }
}
