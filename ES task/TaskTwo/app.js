class Shape {
    constructor() {
        if(this.constructor === Shape) {
            throw "You cannot take an abstract class";
        }
    }


    perimeter() {
        throw "Method 'perimeter()' Not implemented.";
    }

    
    area() {
        throw "Method 'area()' not implemented.";
    }
}


class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    } 

    perimeter() {
        return 2 * Math.PI * Math.pow(this.radius , 2);
    }

    area() {
        return Math.PI * Math.pow(this.radius , 2);
    }
}


class Rectangle extends Shape {
    constructor(height , width) {
        super();
        this.height = height;
        this.width = width;
    }

    perimeter() {
        return 2 * (this.height + this.width); 
    }


    area() {
        return this.height * this.width;
    }
}


class Square extends Shape {
    constructor(x) {
        super();
        this.x = x;
    }

    perimeter() {
        return 4 * this.x;
    }

    area() {
        return Math.pow(this.x , 2);
    }
}



try {
    let newCircle = new Circle(10);
    console.log(`Circle`);
    console.log(`The Perimeter of the Circle that has radius = ${10} cm: ${newCircle.perimeter()} pi`);
    console.log(`The Area of the Circle that has radius = ${10} cm: ${newCircle.area()} pi^2`);

    console.log(`--------------------------------------------------------`);

    let newRectangle = new Rectangle(3 , 4);
    console.log(`Rectangle`);
    console.log(`The Perimeter of the rectangle that has height = ${3} cm and width = ${4} cm: ${newRectangle.perimeter()} cm`);
    console.log(`The Area of the rectangle that has height = ${3} cm and width = ${4} cm: ${newRectangle.area()} cm^2`);

    console.log(`---------------------------------------------------------`);

    let newSquare = new Square(8);
    console.log(`Square`);
    console.log(`The Perimeter of the square that has side equal ${8} cm: ${newSquare.perimeter()} cm`);
    console.log(`The Area of the square that has side equal ${8} cm: ${newSquare.area()} cm^2`);


}

catch(error) {
    console.log(error.message);
}