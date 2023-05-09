//Including packages needed to run prompt & exported classes
const fs = require('fs');
const inquirer = require('inquirer')
const {Circle, Square, Triangle, Color} = require("./lib/shapes");

//Building out a constructor in order to write the SVG file with placement for inquirer response
//class svgFile {
    //constructor() {
        //write svg file filling in color, text, and shape
    //}
//}
//An array of questions that will be asked to receive user input.
const questions = [
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
            choices: ['Square', 'Triangle', 'Circle',],
            name: 'shapeChoice'
        },
        {
            type: 'input',
            message: 'What color would you like your text to be? Enter the name of a color or hex number.',
            name: 'shapeColor'
        }
    ]

    function writeSVG(questions) {
        inquirer.prompt(questions)
        .then((response) => {
            const writeLogo = writelogo(response)
            fs.writeFile("logo.svg", writeLogo)
        })
    }