class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduceSelf() {
    return `Hi My Name is ${this.name} and my Age is ${this.age} `;
  }
}

class Student extends Person {
  #year;

  constructor(name, age, year) {
    super(name, age);
    this.#year = year;
  }

  aboutSelf() {
    console.log(this.introduceSelf() + `and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}

const student1 = new Student("Nazmul Haque", 19, 2);
student1.aboutSelf();
console.log(student1.canStudyArchery());
