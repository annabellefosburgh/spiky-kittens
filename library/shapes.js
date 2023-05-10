
//Creating classes that render the details to create each shape
class Circle {
    render(){
        return `<circle x="50%" y="50%" r="100" height="100%" width="100%"`
    }
}

class Square {
    render(){
        return `<rect x="50" height="100%" width="100%"`
    }
}

class Triangle {
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0"`
    }
}

module.exports = {Circle, Square, Triangle}