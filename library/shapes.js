//Creating the 'master' class Shape
class Shape {
    constructor() {
        this.color = data.shapeColor

    }
}
//Creating classes that render the details to create each shape
class Circle extends Shape {
    constructor(color) {
        super(color)
    }
        render(){
            return `<circle x="50%" y="50%" r="100" height="100%" width="100%" fill="${this.color}"`
        }
}

class Square extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return `<rect x="50" height="100%" width="100%" fill="${this.color}"`
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"`
    }
}

module.exports = { Circle, Square, Triangle }