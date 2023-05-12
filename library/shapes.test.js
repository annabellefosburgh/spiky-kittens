const { Triangle, Square, Circle } = require("./shapes.js");

//Triangle shape test with a fill color of pink
describe("Triangle test", () => {
    test("test for a triangle with a pink background", () => {
      const shape = new Triangle(color="pink");
      expect(shape.render()).toEqual(
        '<polygon points="100, 15 200, 200 0, 200" fill="pink" />'
      );
    });
  });
  
  describe("Circle test", () => {
    test("test for a circle with a green background", () => {
      const shape = new Circle(color="green");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="100" fill="green" />'
      );
    });
  });
  
  describe("Square test", () => {
    test("test for a square with a hex number background", () => {
      const shape = new Square(color="#FEA96D");
      expect(shape.render()).toEqual(
        '<rect width="200" height="200" fill="#FEA96D" />'
      );
    });
  });
  