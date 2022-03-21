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

class Professor extends Person {
  teachingSubject;
  constructor(name, age, teachingSubject) {
    super(name, age);
    this.teachingSubject = teachingSubject;
  }

  aboutMyself() {
    console.log(
      this.introduceSelf() + `And I am Teaching ${this.teachingSubject}`
    );
  }
}

const proFessor1 = new Professor("Nazmul", 27, "Math");
proFessor1.aboutMyself();
