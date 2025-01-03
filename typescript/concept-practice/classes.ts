class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    console.log("-=-=", id, name);
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

const it = new ITDepartment("d1", ["Max"]);
const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "Year End Report";

accounting.addEmployee("Max");
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
