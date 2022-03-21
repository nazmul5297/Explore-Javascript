class Shape {
  name;
  sides;
  sideLength;
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    console.log("perimeter", perimeter);
  }
}

const square = new Shape("Square", 4, 5);
square.calcPerimeter();
