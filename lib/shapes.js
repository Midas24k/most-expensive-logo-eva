class Shapes{
    constructor(){
        this.color = "";
    }
    setColor(color){
        this.color = color;
    }
}

class Triangle extends Shapes{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Circle extends Shapes{
    render(){
        return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`
    }
}

class Square extends Shapes{
    render(){
        return `<rect width="" height="" fill="${this.color}" />`
    }
}


module.exports= {Triangle, Circle, Square}