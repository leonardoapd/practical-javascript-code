// Code of the square
console.group("Square");
const ladoCuadrado = 5;
console.log("The sides of the square measure: " + ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;
console.log("The perimeter of the square measure: " + perimetroCuadrado + "cm.");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("The area of the square measure: " + areaCuadrado + "cm^2.");
console.groupEnd();

// Code of the triangle
console.group("Triangle");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const base = 4;
const alturaTriangulo = 5.5;

console.log("The sides of the triangle measure: " + ladoTriangulo1 + "cm and " + ladoTriangulo2 + "cm, and the base measure: " + base + "cm.");
console.log("The height of the triangle is: " + alturaTriangulo + "cm.");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + base;
console.log("The perimeter of the triangle is: " + perimetroTriangulo + "cm.");

const areaTriangulo = (base * alturaTriangulo) / 2;
console.log("The area of the triangle is: " + areaTriangulo + "cm^2.");

console.groupEnd();

// Code of the circle
console.group("Circle");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const circunferencia = PI * diametroCirculo;
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log("The perimeter of the circle is: " + circunferencia + "cm.");
console.log("The area of the circle is: " + areaCirculo + "cm^2.");

for (let i = 0; i < 2; i++) {
    document.write(`
        <p>The area of the circle is ${areaCirculo}cm^2</p>
    `);
}
console.groupEnd();

// Functions in javascript as encapsulation
console.group("SquareFunctions");
function squarePerimeter(side) {
    return side * 4;
}

function squareArea(side) {
    return side * side;
}
console.groupEnd();


console.group("TriangleFunctions");
function trianglePerimeter(side1, side2, base) {
    return side1 + side2 + base;
}

const triangleArea = (height, base) => {
    return (base * height) / 2;
}
console.groupEnd();

console.group("CircleFunctions");
const circleDiameter = (radius) => {
    return radius * 2;
}

const circlePerimeter = (radius) => {
    const diameter = circleDiameter(radius);
    return diameter * PI;
}

const circleArea = (radius) => {
    return Math.pow(radius, 2) * PI;
}
console.groupEnd();
