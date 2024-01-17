const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const logo = require('lib/logo.js');
const { Shapes, Triangle, Circle, Square} = require('./lib/shapes');
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
    inquirer.prompt(questions)
        .then((data) => {
        console.log(data)
        console.log('Making your new logo');
        switch (`${data.Shapes}`) {
            case 'Triangle':
                console.log('making a triangle')
                const triangle = new Triangle(data.fill, data.stroke, data.strokeWidth, data.text, data.textColor, data.width)
                fs.writeFile("lib/output/final_product", triangle.renderTriangle, (err) =>{
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('We did it boys, its a Triangle');
                    }

                });
                break;
            case 'Circle':
                console.log('ooh we drawing a circle');
                const circle = new Circle(data.fill, data.stroke, data.strokeWidth, data.text, data.textColor, data.radius)
                fs.writeFile("lib/output/final_product", circle.renderCircle, (err) =>{
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('We did it boys, its a Circle');
                    }
                });
                break; 
            case 'Square':
                console.log('L7 thats right a square');
                const square = new Square(data.fill, data.stroke, data.strokeWidth, data.text, data.textColor, data.width, data.width)
                fs.writeFile("lib/output/final_product", square.renderSquare, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('We did it boys, its a Square');
                    }
                });
        }
        fs.writeFileSync(path.join(process.cwd(),'Mocklogo.svg'),logo({...data}))
    });
}

init();
