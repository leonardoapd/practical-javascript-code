// Functions in javascript as encapsulation
const squarePerimeter = (side) => {
    return side * 4;
}

const squareArea = (side) => {
    return side * side;
}

const equilateralTrianglePerimeter = (side1) => {
    debugger;
    return side1 * 3;
}

const equilateralTriangleArea = (height, base) => {
    return (base * height) / 2;
}

//Calculate the heigth of an equilateral triangle
const equilateralTriangleHeight = (anyside) => {
    return twoDecimalPlaces((Math.sqrt(3) / 2) * anyside);
}

//Calculate the area of a isoceles triangle
const isocelesTriangleArea = (height, base) => {
    return Math.sqrt((height * height) + (base * base) / 4);
}


const isocelesTriangleHeight = (base, side1, side2) => {
    if (side1 === side2 && side1 !== base ) {
            let height = Math.sqrt((4 * side1 * side1) - (base * base)) / 2;
            return `The height of the isoceles triangle is ${height}.`;
    } else {
        return "You enter a wrong value, please try again.";
    }
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

const isocelesTrianglePerimeter = (side1, side2, base) => {
    if (side1 === side2) {
        let perimeter = base + side1 + side2;
        return `The perimeter of the isoceles triangle is ${perimeter}.`;
    } else {
        return "The sides of the triangle must be equal.";
    }
}


export {
    squareArea,
    squarePerimeter,
    equilateralTriangleArea,
    equilateralTrianglePerimeter,
    isocelesTrianglePerimeter,
    circleArea,
    circlePerimeter,
    isocelesTriangleHeight,
    isocelesTriangleArea,
    equilateralTriangleHeight
};