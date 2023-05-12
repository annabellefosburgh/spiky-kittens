//Creating the 'master' class Shape
class Shape {
    constructor(color) {
        this.color = color
    }
}
//Creating classes that render the details to create each shape
class Circle extends Shape {
    constructor(color) {
        super(color)
    }
        render(){
            return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`
        }
}

class Square extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return `<rect width="200" height="200" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return `<polygon points="100, 15 200, 200 0, 200" fill="${this.color}" />`
    }
}

module.exports = { Circle, Square, Triangle }