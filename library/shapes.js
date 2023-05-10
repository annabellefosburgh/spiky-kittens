//Writing a class to set shape color
class Color {
    //including a constructor to take the color value and set it
    constructor() {
        this.shapeColor = ''
    }
        setColor(shapeColor) {
            this.shapeColor = (shapeColor)
        }
}
//Creating classes that render the details to create each shape
class Circle {
    render(){
        return `<circle x="50%" y="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}">`
    }
}

class Square {
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.shapeColor}">`
    }
}

class Triangle {
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapecolor}"`
    }
}

module.exports = {Circle, Square, Triangle, Color}