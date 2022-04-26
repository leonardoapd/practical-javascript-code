import { squareArea, squarePerimeter, trianglePerimeter, triangleArea, circleArea, circlePerimeter } from './modules/geometry.js';

const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");


const triangleContainer = document.getElementById("triangle-container");
const squareContainer = document.getElementById("square-container");
const circleContainer = document.getElementById("circle-container");
const squareButton = document.getElementById("square-button");
const triangleButton = document.getElementById("triangle-button");
const circleButton = document.getElementById("circle-button");

const activateSquareForm = () => {
    squareContainer.className = "flex-center";
    triangleContainer.className = "hide-card";
    circleContainer.className = "hide-card";
    squareButton.className = "option option-selected";
    triangleButton.className = "option option-noselected";
    circleButton.className = "option option-noselected";
}

const activateTriangleForm = () => {
    triangleContainer.className = "flex-center";
    squareContainer.className = "hide-card";
    circleContainer.className = "hide-card";
    triangleButton.className = "option option-selected";
    squareButton.className = "option option-noselected";
    circleButton.className = "option option-noselected";
}

const activateCircleForm = () => {
    circleContainer.className = "flex-center";
    triangleContainer.className = "hide-card";
    squareContainer.className = "hide-card";
    circleButton.className = "option option-selected";
    triangleButton.className = "option option-noselected";
    squareButton.className = "option option-noselected";
}


//Arrow function to calculate the area of the square
const calculateSquareArea = () => {
    //The value of the input is captured
    let side = document.getElementById('side').value;
    //The function squareArea from geometry.js module is used
    let mySquareArea = squareArea(side);
    //The result is displayed in the modal
    if (mySquareArea !== 0) {
        document.getElementById("modal-content").innerHTML = `The area of the square is ${mySquareArea}.`;
    } else {
        document.getElementById("modal-content").innerHTML = "Please enter a number.";
    }
    //The modal is displayed
    modal.showModal();
};

//Arrow function to calculate the perimeter of the square
const calculateSquarePerimeter = () => {
    let side = document.getElementById('side').value;
    let mySquarePerimeter = squarePerimeter(side);
    if (mySquarePerimeter !== 0) {
        document.getElementById("modal-content").innerHTML = `The perimeter of the square is ${mySquarePerimeter}.`;
    } else {
        document.getElementById("modal-content").innerHTML = "Please enter a number.";
    }
    modal.showModal();
}

const calculateTrianglePerimeter = () => {
    let side1 = Number(document.getElementById('side1').value);
    let side2 = Number(document.getElementById('side2').value);
    let base = Number(document.getElementById('base').value);

    if (side1 == 0 || side2 == 0 || base == 0) {
        document.getElementById("modal-content").innerHTML = "Every side of the triangle must be greater than 0.";
    } else if (side1 !== "" && side2 !== "" && base !== "") {
        let myTrianglePerimeter = trianglePerimeter(side1, side2, base);
        document.getElementById("modal-content").innerHTML = `The perimeter of the triangle is ${myTrianglePerimeter}.`;
    } else {
        document.getElementById("modal-content").innerHTML = "Please enter a number.";
    }
    modal.showModal();
}

const calculateTriangleArea = () => {
    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;

    if (base == 0 || height == 0) {
        document.getElementById("modal-content").innerHTML = "Every side of the triangle must be greater than 0.";
    } else if (base !== "" && height !== "") {
        let myTriangleArea = triangleArea(base, height);
        document.getElementById("modal-content").innerHTML = `The area of the triangle is ${myTriangleArea}.`;
    } else {
        document.getElementById("modal-content").innerHTML = "Please enter the base and height of the triangle.";
    }
    modal.showModal();
}

const calculateCircleArea = () => {
    let radius = document.getElementById('radius').value;
    if (radius == 0) {
        document.getElementById("modal-content").innerHTML = "The radius of the circle must be greater than 0.";
    } else if (radius !== "") {
        let myCircleArea = circleArea(radius);
        document.getElementById("modal-content").innerHTML = `The area of the circle is ${myCircleArea}.`;
    } else {
        document.getElementById("modal-content").innerHTML = "Please enter the radius of the circle.";
    }
    modal.showModal();
}

const calculateCirclePerimeter = () => {
    let radius = document.getElementById('radius').value;
    if (radius == 0) {
        document.getElementById("modal-content").innerHTML = "The radius of the circle must be greater than 0.";
    } else if (radius !== "") {
        let myCirclePerimeter = circlePerimeter(radius);
        document.getElementById("modal-content").innerHTML = `The perimeter of the circle is ${myCirclePerimeter}.`;
    } else {
        document.getElementById("modal-content").innerHTML = "Please enter the radius of the circle.";
    }
    modal.showModal();
}

//Function to close the modal
closeModal.onclick = () => {
    modal.close();
}

//Exposing the functions for the browser knows about them
window.calculateSquareArea = calculateSquareArea;
window.calculateSquarePerimeter = calculateSquarePerimeter;
window.calculateTrianglePerimeter = calculateTrianglePerimeter;
window.calculateTriangleArea = calculateTriangleArea;
window.calculateCircleArea = calculateCircleArea;
window.calculateCirclePerimeter = calculateCirclePerimeter;
window.activateSquareForm = activateSquareForm;
window.activateTriangleForm = activateTriangleForm;
window.activateCircleForm = activateCircleForm;

