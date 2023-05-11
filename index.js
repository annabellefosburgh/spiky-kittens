//Including packages needed to run prompt & exported classes
const fs = require('fs');
const inquirer = require('inquirer')
const { Circle, Square, Triangle } = require("./library/shapes");

inquirer
    .prompt(
        [
            {
                type: 'input',
                message: 'What characters would you like to include in your logo? Choose up to 3.',
                name: 'textInput'
            },
            {
                type: 'input',
                message: 'What color would you like your text to be? Enter the name of a color or a hex number.',
                name: 'textColor'
            },
            {
                type: 'list',
                message: 'Choose a shape for your logo.',
                choices: ['circle', 'square', 'triangle',],
                name: 'shapeChoice'
            },
            {
                type: 'input',
                message: 'What color would you like your shape to be? Enter the name of a color or hex number.',
                name: 'shapeColor'
            }
        ])

    .then(({ shapeChoice , textInput, textColor, shapeColor }) => {
        console.log("Building your logo..")
        let Shape;
        switch (shapeChoice) {
            case "Triangle":
                Shape = new Triangle(shapeColor);
                break;

            case "Circle":
                Shape = new Circle(shapeColor);
                break;

            case "Square":
                Shape = new Square(shapeColor);
                break;
        }
        console.log(Shape)
        fs.writeFile("./examples/logo.svg", writeSVG(Shape, textInput, textColor), () => { console.log("err") })
    })



function writeSVG(Shape, textInput, textColor) {
    return `
        <svg width="300" height="200">
        <text x="100" y="125" font-size="50" text-anchor="middle" fill="${textColor}"> ${textInput} </text>
        < stroke="none" />
        </svg>
        `
}

