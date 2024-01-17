const inquirer = require('inquirer');
const fs = require('fs');
const {logo} = require('lib/logo.js');
const { Circle, Square, Triangle } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Use three letters to abbriviate your companies name?',

    },
    {
        type: 'input',
        name: 'color text',
        message: 'What color would you like text to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to use for a background of your logo',
        choices: [Triangle, Circle, Square]
    },  
    {
        type: 'input',
        name: 'color shape',
        message: 'What color would you like the shape to be?',
    
    },

];

function init() {
    inquirer.createPromptModule(questions).then((response) => {
        console.log(response)
        console.log('Making your new logo')
        fs.writeFileSync(path.join(process.cwd(),'Mocklogo.svg',))
    });
}

init();
