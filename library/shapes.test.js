const { Triangle, Square, Circle } = require("./shapes.js");

//Triangle shape test with a fill color of pink
describe("Triangle test", () => {
    test("test for a triangle with a pink background", () => {
      let shape = new Triangle();
      shape.setColor("pink");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="pink" />'
      );
    });
  });
  
  describe("Circle test", () => {
    test("test for a circle with a green background", () => {
      let shape = new Triangle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<circle x="50%" y="50%" r="100" height="100%" width="100%" fill="green" />'
      );
    });
  });
  
  describe("Square test", () => {
    test("test for a square with a hex number background", () => {
      let shape = new Triangle();
      shape.setColor("#FEA96D");
      expect(shape.render()).toEqual(
        '<rect x="50" height="100%" width="100%" fill="#FEA96D" />'
      );
    });
  });
  