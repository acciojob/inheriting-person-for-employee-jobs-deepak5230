// complete this js code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Example of creating a Person instance and calling the greet method
const person = new Person('Alice', 25);
person.greet(); // Output: Hello, my name is Alice, I am 25 years old.


class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Example of creating an Employee instance and calling the jobGreet method
const employee = new Employee('Bob', 30, 'Manager');
employee.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
