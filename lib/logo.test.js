const { createLogo } = require('./logo.js');
const { Triangle, Circle, Square } = require('./shapes.js');

describe('Logo is rendering', () => {
    test('Logo made with Triangle', () => {
        const data = {
            shape: new Triangle(),
            colorShape: 'red',
            text: 'ABC',
            colorText: 'blue',
        };
        
        const result = createLogo(data);
        
        // assertions based on rendering requirements
        expect(result).toContain('<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">');
        expect(result).toContain('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
        expect(result).toContain('<text x="150" y="150" font-size="50" text-anchor="middle" fill="blue">ABC</text>');
    })

    test('Logo with Circle', () => {
        const data = {
          shape: new Circle(),
          colorShape: 'orange',
          text: 'ABC',
          colorText: 'purple',
        };
    
        const result = createLogo(data);
    
        // assertions based on rendering requirements
        expect(result).toContain('<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">');
        expect(result).toContain('<circle cx="150" cy="100" r="100" fill="orange" />');
        expect(result).toContain('<text x="150" y="150" font-size="50" text-anchor="middle" fill="purple">ABC</text>');
    });

    test('Logo with Square', () => {
        const data = {
          shape: new Square(),
          colorShape: 'grey',
          text: 'ABC',
          colorText: 'black',
        };
    
        const result = createLogo(data);
    
        // assertions based on rendering requirements
        expect(result).toContain('<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">');
        expect(result).toContain('rect x="30" y="45" width="250" height="250" fill="grey" />');
        expect(result).toContain('<text x="150" y="150" font-size="50" text-anchor="middle" fill="black">ABC</text>');
      });



});
