// Functions in javascript as encapsulation
const squarePerimeter = (side) => {
    return side * 4;
}

const squareArea = (side) => {
    return side * side;
}

const trianglePerimeter = (side1, side2, base) => {
    return side1 + side2 + base;
}

const triangleArea = (height, base) => {
    return (base * height) / 2;
}

const circleDiameter = (radius) => {
    return radius * 2;
}

const circlePerimeter = (radius) => {
    const diameter = circleDiameter(radius);
    return twoDecimalPlaces(diameter * Math.PI);
}

const circleArea = (radius) => {
    let area = Math.pow(radius, 2) * Math.PI;
    return twoDecimalPlaces(area);
}

//Arrow function to truncate the number to two decimal places
const twoDecimalPlaces = (number) => {
    return Math.round(number * 100) / 100;
}

export { squareArea, squarePerimeter, triangleArea, trianglePerimeter, circleArea, circlePerimeter };