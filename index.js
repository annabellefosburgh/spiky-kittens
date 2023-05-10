//Including packages needed to run prompt & exported classes
const fs = require('fs');
const inquirer = require('inquirer')
const {Circle, Square, Triangle} = require("./library/shapes");

function init() {
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
            choices: ['Circle', 'Square', 'Triangle',],
            name: 'shapeChoice'
        },
        {
            type: 'input',
            message: 'What color would you like your text to be? Enter the name of a color or hex number.',
            name: 'shapeColor'
        }
    ]

    function writelogo(data) {
        return `
        <svg width="300" height="200">
        <text x="0" y="15" fill="${data.textColor}"> ${data.textInput} </text>
        <${data.shapeChoice} fill="${data.shapeColor}" stroke="none" />
        </svg>
        `
    }

    function writeSVG(questions) {
        inquirer.prompt(questions)
        .then((response) => {
            console.log("Building your logo based on the data given...")
            const writeLogo = writelogo(response)
            fs.writeFile("logo.svg", writeLogo, () => {  console.log("error")})
            console.log("Logo generated successfully!")
        })
    }
    writeSVG(questions);
}

init();