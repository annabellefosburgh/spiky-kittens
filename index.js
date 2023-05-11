//Including packages needed to run prompt & exported classes
const fs = require('fs');
const inquirer = require('inquirer')
const { Circle, Square, Triangle } = require("./library/shapes");


inquirer
    .prompt (
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

        .then(({ shapeChoice }, textInput, textColor, shapeColor) => {
            console.log("Building your logo..")
            let Shape;
            switch (shapeChoice) {
                case "Triangle":
                    Shape = new Triangle();
                    break;

                case "Circle":
                    Shape = new Circle();
                    break;

                case "Square":
                    Shape = new Square();
                    break;
            }
            fs.writeFile("logo.svg", writeSVG())
        })
        // .catch((error) => {
        //     console.log("Error!")
        // })

    function writeSVG(shapeChoice, textInput, textColor, shapeColor) {
        return `
        <svg width="300" height="200">
        <text x="0" y="15" fill="${textColor}"> ${textInput} </text>
        <${shapeChoice} stroke="none" />
        </svg>
        `
        }
