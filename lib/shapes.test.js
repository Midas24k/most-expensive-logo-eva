const { Triangle, Circle, Square } = require('lib/logo.js');

let shape
describe('is shapes rendering', () => {
    test('triangle rendering', () => {
        shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    test ('is ircle rendering', () => {
        shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red" />');
    });
   
    test ('is square rendering', () => {
        shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="30" y="45" width="250" height="250" fill="green" />');
    });
});

