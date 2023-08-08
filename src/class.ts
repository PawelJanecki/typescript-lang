abstract class Department {
  static fiscalYear = 2002;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    Department.fiscalYear = 2023;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
  // this method is empty, has only signature and by abstract keyword
  // all of subclasses are forced to provide own implementation.

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[] = [];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe(this: Department): void {
    console.log('IT departemnt - ID: ', this.name);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (!!this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(mostRecentReport: string) {
    if (!mostRecentReport) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(mostRecentReport);
  }

  // private constructor to make AccountingDepartment as Singleton.
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('a1', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting departement - ID: ', this.id);
  }

  addEmployee(employee: string): void {
    if (employee === 'Max') {
      return;
    }
    this.employees.push(employee); // this method is reachable only by protected modifier in super class.
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const d1 = new Department('d1', 'Department 1'); - cannot create instance of abstract class.
// console.log(d1);

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('it1', ['Paul']);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment('a1', []);
const accounting = AccountingDepartment.getInstance();
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'Year end report.';
console.log(accounting.mostRecentReport);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');

console.log(accounting);
accounting.printReports();
accounting.printEmployeeInformation();
accounting.describe();

const accounting2 = AccountingDepartment.getInstance();
accounting2.addEmployee('Paul');
accounting.printEmployeeInformation();
accounting2.describe();
accounting2.printEmployeeInformation();
