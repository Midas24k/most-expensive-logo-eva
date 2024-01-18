const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const logoModule = require('./lib/logo.js');
const { Triangle, Circle, Square } = require('./lib/shapes.js');
const questions = [

    {
        type: 'input',
        name: 'text',
        message: 'Use three letters to abbriviate your companies name?',

    },

    {
        type: 'input',
        name: 'colorText',
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
        name: 'colorShape',
        message: 'What color would you like the shape to be?',

    },

];

// Will trigger the inquirer pkg using a switch statement to call the shape selected with txt
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log('Making your new logo');
            let logo
            switch (`${data.shape}`) {
                case 'Triangle':
                    console.log('Making a triangle')
                    const triangle = new Triangle(data.colorShape)
                    data.shape = triangle
                    logo = logoModule.createLogo(data)
                    fs.writeFile("lib/output/final_product.svg", logo, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('We did it boys, its a Triangle');
                        }
                    });
                    break;
                case 'Circle':
                    console.log('Ooh we are drawing a circle');
                    const circle = new Circle(data.colorShape)
                    data.shape = circle
                    logo = logoModule.createLogo(data)
                    fs.writeFile("lib/output/final_product.svg", logo, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('We did it boys, its a Circle');
                        }
                    });
                    break;
                case 'Square':
                    console.log('L7 thats right a square');
                    const square = new Square(data.colorShape)
                    data.shape = square
                    logo = logoModule.createLogo(data)
                    fs.writeFile("lib/output/final_product.svg", logo, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('We did it boys, its a Square');
                        }
                    });
                    break;
            }

        });
}
// This will initialize the app
init();
