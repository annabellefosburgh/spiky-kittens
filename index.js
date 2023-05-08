const fs = require('fs');
const inquirer = require('inquirer')
const triangle = require//triangle class export
const square = require//square class export
const circle = require//circle class export

inquirer
    .prompt([
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
    ])