abstract class Employee {
  constructor(private firstName: string, private lastName: string) {
    console.log("called from abstract class Employee");
  }
  abstract getStipend(): number;

  abstract get fullName(): string;

  compensationStatement(): string {
    return `${this.fullName} makes ${this.getStipend()} a month.`;
  }
}

// const o1 = new Employee(); // ❌ Cannot create an instance of an abstract class.

class c1 extends Employee {
  getStipend(): number {
    return 200;
  }

  constructor(private firstname: string, private lastname: string) {
    super("vivek", "paliwar");
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  methodcall() {
    console.log(this.fullName);
    super.compensationStatement();
  }
}

const o1 = new c1("vinay", "paliwar");

o1.methodcall();
