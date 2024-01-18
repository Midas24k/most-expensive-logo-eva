
class Logo {
    constructor(){
        this.textEl=""
        this.shapeEL=""
    }

    render(){
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> ${this.shapeEL} ${this.textEl}</svg>`
       
    }

    setShape(shape, color){
        shape.setColor(color);
        this.shapeEL = shape.render()
    }

    setText(letters, color){
        if(letters.length > 3){
            throw new Error("Your text cannot be more than 3 characters")
        }
        this.textEl=`<text x="150" y="125" font-size="50" text-anchor="middle" fill="${color}">${letters}</text>`
    }
}

module.exports = {
    createLogo: (data) => {
        const logo = new Logo();
        logo.setShape(data.shape, data.colorShape);
        logo.setText(data.text, data.colorText);
        return logo.render();
    }
};