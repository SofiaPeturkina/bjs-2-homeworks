// Задача №1

function parseCount(value) {
    if (isNaN(Number.parseInt(value))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseInt(value);
}

function validateCount(significance) {
    try {
        return parseCount(significance);
    }
    catch(error) {
        return error;
    }
}

// Задача №2

class Triangle {
    constructor (a, b, c) {
        if ((a + b) < c || (b + c) < a || (a + c) < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            this.a  = a;
            this.b = b;
            this.c = c;
        }
    }
    
    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const half = this.getPerimeter() / 2;
        const area = Math.sqrt(half * (half - this.a) * (half - this.b) * (half - this.c));

        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },
        }
    }
}