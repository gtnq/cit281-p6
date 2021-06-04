class Shape { 
    constructor(arr) {
        //console.log(arr)
        this.arr = null;
        if (arr == null) {
            this.arr = [];
        } else {
            this.arr = arr;
        }
    }

    perimeter = () => {
        const arrow = (value_one, value_two) => value_one + value_two;
        if (this.arr.length == 0) {
            return 0;
        } else {
            return this.arr.reduce(arrow);
        }
    }
}
/*
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0
*/

class Rectangle extends Shape{
    constructor (length, width) {
        if (length === undefined) {
            length = 0
        }
        if (width === undefined) {
            width = 0
        }
        super([length,width,length,width])
        //this.length, this.width = 0 
        //console.log (length, width)
        this.length = length
        this.width = width
    }

    area = () => {
        
        return this.length * this.width;
    }

}
/*

console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0
*/

class Triangle extends Shape {
    constructor (side1, side2, side3) {
        if (side1 === undefined) {
            side1 = 0;
        }
        if (side2 === undefined) {
            side2 = 0;
        }
        if (side3 === undefined) {
            side3 = 0;
        }
        super([side1,side2,side3]);
        //this.length, this.width = 0 
        //console.log (length, width)
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    area = () => {
        const par = this.perimeter() / 2;
        //console.log(par)
        return Math.sqrt(par*(par-this.side1)*(par-this.side2)*(par-this.side3)); 
    }
}
/*
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
*/

const shape = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
for (let i of shape) {
    
    switch(i.length) {
        case 2:
            if (i[0] == i[1]) {
                let sq = new Rectangle(i[0],i[1]);
                let per_sq = sq.perimeter();
                let area_sq = sq.area();
                //console.log(i[0],i[1])
                console.log("Square with side " + i+ " has perimeter of " + 
                                per_sq + " and area of " + area_sq)
            } else {
                let rect = new Rectangle(i[0],i[1]);
                let per_rect = rect.perimeter();
                let area_rect = rect.area();
                console.log("Rectangle with side " + i+ " has perimeter of " + 
                                per_rect + " and area of " + area_rect)
            }
            break
        case 3:
            let tri = new Triangle(i[0],i[1],i[2]);
            let per_tri = tri.perimeter();
            //console.log(tri.side1)
            let area_tri = tri.area();
            console.log("Triangle with side " + i+ " has perimeter of " + 
                                per_tri + " and area of " + area_tri);
            break
        default:
            console.log("Shape with " + i.length + " side unsupported")    
            break;
    }   
}