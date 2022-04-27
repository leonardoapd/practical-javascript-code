//Import the function from geometry.js module
import {
    squareArea, squarePerimeter,
    equilateralTriangleArea, circleArea,
    circlePerimeter, isocelesTriangleHeight,
    equilateralTriangleHeight, isocelesTriangleArea,
    isocelesTrianglePerimeter, equilateralTrianglePerimeter
} from './modules/geometry.js';

//The elements of the modal are gotten
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

//The buttons are gotten 
const squareButton = document.getElementById("square-button");
const triangleButton = document.getElementById("triangle-button");
const circleButton = document.getElementById("circle-button");

var countOfActivation = 0;

//Clicking the square button activates the section to perform square operations.
const activateSquareForm = () => {
    squareButton.className = "option option-selected";
    triangleButton.className = "option option-noselected";
    circleButton.className = "option option-noselected";

    document.getElementById("figure-container").innerHTML =
        `<div class="card">
        <h2>Area and Perimeter of a square</h2>
        <form class="flex-column" action="">
            <label class="form-labels" for="side">
                Enter a side value of the square:
            </label>
            <input class="form-inputs" type="number" name="side" id="side" required />
            <button class="button buttons button_sub" type="button" onClick="calculateSquarePerimeter()" name="perimeter">
                Get the perimeter
            </button>
            <button class="button buttons button_sub" type="button" onClick="calculateSquareArea()" name="area">
                Get the area
            </button>
        </form>
    </div>`;
}

//Clicking the circle button activates the section to perform square operations.
const activateCircleForm = () => {
    circleButton.className = "option option-selected";
    triangleButton.className = "option option-noselected";
    squareButton.className = "option option-noselected";

    document.getElementById("figure-container").innerHTML =
        `<div class="card">
            <h2>Area and Perimeter of a circle</h2>
            <form class="flex-column" action="">
                <label class="form-labels" for="radius">
                    Enter the radius of the circle:
                </label>
                <input class="form-inputs" type="number" name="radius" id="radius" required />
                <button class="button buttons button_sub" type="button" onClick="calculateCirclePerimeter()"
                    name="perimeter">
                    Get the perimeter
                </button>
                <button class="button buttons button_sub" type="button" onClick="calculateCircleArea()" name="area">
                    Get the area
                </button>
            </form>
        </div>`;
}

//Clicking the triangle button activates the section to perform square operations.
const activateTriangleForm = () => {
    triangleButton.className = "option option-selected";
    squareButton.className = "option option-noselected";
    circleButton.className = "option option-noselected";

    document.getElementById("figure-container").innerHTML =
        `<div class="card">
            <h2>Area and Perimeter and Heigth of a triangle</h2>
            <form class="flex-column" action="" id="triangle-form">
                <label for="triangle-type" class="form-labels">
                    Select the type of triangle:
                </label>
                <select class="form-inputs" name="triangle-type" id="triangle-type" required onChange="activateTriangleCalculation()">
                    <option value="">Please select a type of triangle</option>
                    <option value="isosceles">Isosceles</option>
                    <option value="equilateral">Equilateral</option>
                </select>
            </form>
        </div>`;
}

//When choosing an option from the drop-down list, a list is activated to choose the operation to calculate
const activateTriangleCalculation = () => {
    let triangleType = document.getElementById("triangle-type").value;
    if (countOfActivation === 0) {
        document.getElementById("triangle-form").innerHTML +=
            `<label for="calculation-type" class="form-labels">
                Select the type of calculation:
            </label>
            <select class="form-inputs" name="calculation-type" id="calculation-type" required onChange="activateTriangleInputs()">                <option value="">Please select a type of calculation</option>
                <option value="area">Area</option>
                <option value="perimeter">Perimeter</option>
                <option value="height">Height</option>
            </select>
            <div class="flex-column" id="triangle-inputs">
            </div>`;
        countOfActivation = 1;
    }
    document.getElementById("triangle-type").value = triangleType;
}

//When choosing an option, the inputs are activated to enter the data of the triangle
const activateTriangleInputs = () => {
    //It is necessary to obtain the values ​​of the dropdown lists to show them again and make decisions with conditionals based on them
    let triangleType = document.getElementById("triangle-type").value;
    let calculationType = document.getElementById("calculation-type").value;
    if (triangleType === "isosceles") {
        if (calculationType === "area") {
            document.getElementById("triangle-inputs").innerHTML =
                `<label for="heigth" class="form-labels">
                    Enter the heigth of the triangle:
                </label>
                <input class="form-inputs" type="number" name="heigth" id="heigth" required />
                <label for="base" class="form-labels">
                    Enter the base of the triangle:
                </label>
                <input class="form-inputs" type="number" name="base" id="base" required />
                <button class="button buttons button_sub" type="button" onClick="calculateTriangleArea()" name="area">
                    Get the area
                </button>`;
        } else if (calculationType === "perimeter") {
            document.getElementById("triangle-inputs").innerHTML =
                `<label for="side1" class="form-labels">
                    Enter the first side of the triangle:
                </label>
                <input class="form-inputs" type="number" name="side1" id="side1" required />
                <label for="side2" class="form-labels">
                    Enter the second side of the triangle:
                </label>
                <input class="form-inputs" type="number" name="side2" id="side2" required />
                <label for="base" class="form-labels">
                    Enter the base of the triangle:
                </label>
                <input class="form-inputs" type="number" name="base" id="base" required />
                <button class="button buttons button_sub" type="button" onClick="calculateTrianglePerimeter()" name="perimeter">
                    Get the perimeter
                </button>`;
        } else if (calculationType === "height") {
            document.getElementById("triangle-inputs").innerHTML =
                `<label for="base" class="form-labels">
                    Enter the base of the triangle:
                </label>
                <input class="form-inputs" type="number" name="base" id="base" required />
                <label for="side1" class="form-labels">
                    Enter the first side of the triangle:
                </label>
                <input class="form-inputs" type="number" name="side1" id="side1" required />
                <label for="side2" class="form-labels">
                    Enter the second side of the triangle:
                </label>
                <input class="form-inputs" type="number" name="side2" id="side2" required />
                <button class="button buttons button_sub" type="button" onClick="calculateTriangleHeight()" name="height">
                    Get the height
                </button>`;
        }
    } else if (triangleType === "equilateral") {
        if (calculationType === "area") {
            document.getElementById("triangle-inputs").innerHTML =
                `<label for="base" class="form-labels">
                    Enter the base of the triangle:
                </label>
                <input class="form-inputs" type="number" name="base" id="base" required /> 
                <label for="heigth" class="form-labels">
                    Enter the heigth of the triangle:
                </label>
                <input class="form-inputs" type="number" name="heigth" id="heigth" required />
                <button class="button buttons button_sub" type="button" onClick="calculateTriangleArea()" name="area">
                    Get the area
                </button>`;
        } else if (calculationType === "perimeter") {
            document.getElementById("triangle-inputs").innerHTML =
                `<label for="side" class="form-labels">
                    Enter any side of the triangle:
                </label>
                <input class="form-inputs" type="number" name="side" id="side" required />
                <button class="button buttons button_sub" type="button" onClick="calculateTrianglePerimeter()" name="perimeter">
                    Get the perimeter
                </button>`;
        } else if (calculationType === "height") {
            document.getElementById("triangle-inputs").innerHTML =
                `<label for="side1" class="form-labels">
                    Enter any side of the triangle:
                </label>
                <input class="form-inputs" type="number" name="side1" id="side1" required />
                <button class="button buttons button_sub" type="button" onClick="calculateTriangleHeight()" name="height">
                    Get the height
                </button>`;
        }
    }
    document.getElementById("triangle-type").value = triangleType;
    document.getElementById("calculation-type").value = calculationType;
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
}

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

const calculateTriangleHeight = () => {
    let triangleType = document.getElementById("triangle-type").value;

    if (triangleType === "isosceles") {
        let side1 = document.getElementById('side1').value;
        let side2 = document.getElementById('side2').value;
        let base = document.getElementById('base').value;
        let myIsocelesTriangleHeight = isocelesTriangleHeight(base, side1, side2);
        document.getElementById("modal-content").innerHTML = myIsocelesTriangleHeight;
    } else if (triangleType === "equilateral") {
        let side1 = document.getElementById('side1').value;
        let myEquilateralTriangleHeight = equilateralTriangleHeight(side1);
        document.getElementById("modal-content").innerHTML = `The heigth of the triangle is ${myEquilateralTriangleHeight}.`;
    }
    modal.showModal();
}

const calculateTriangleArea = () => {
    let triangleType = document.getElementById("triangle-type").value;
    let base = document.getElementById('base').value;
    let heigth = document.getElementById('heigth').value;

    if (triangleType === "isosceles") {

        let myIsocelesTriangleArea = isocelesTriangleArea(base, heigth);
        document.getElementById("modal-content").innerHTML = `The area of the triangle is ${myIsocelesTriangleArea}.`;
    } else if (triangleType === "equilateral") {
        let myEquilateralTriangleArea = equilateralTriangleArea(base, heigth);
        document.getElementById("modal-content").innerHTML = `The area of the triangle is ${myEquilateralTriangleArea}.`;
    }
    modal.showModal();
}

const calculateTrianglePerimeter = () => {
    let triangleType = document.getElementById("triangle-type").value;

    if (triangleType === "isosceles") {
        let side1 = Number(document.getElementById('side1').value);
        let side2 = Number(document.getElementById('side2').value);
        let base = Number(document.getElementById('base').value);
        let myIsocelesTrianglePerimeter = isocelesTrianglePerimeter(side1, side2, base);
        if (typeof (myIsocelesTrianglePerimeter) === "number") {
            document.getElementById("modal-content").innerHTML = `The perimeter of the triangle is ${myIsocelesTrianglePerimeter}.`;
        } else {
            document.getElementById("modal-content").innerHTML = myIsocelesTrianglePerimeter;
        }
    } else if (triangleType === "equilateral") {
        let side = document.getElementById('side').value;
        let myEquilateralTrianglePerimeter = equilateralTrianglePerimeter(side);
        document.getElementById("modal-content").innerHTML = `The perimeter of the triangle is ${myEquilateralTrianglePerimeter}.`;
    }
    modal.showModal();
}

//It is necessary to call the function to show when the page loads for the first time
activateSquareForm();

//Function to close the modal
closeModal.onclick = () => {
    modal.close();
}

//Exposing the functions for the browser knows about them, since the module is not exposed
window.calculateSquareArea = calculateSquareArea;
window.calculateSquarePerimeter = calculateSquarePerimeter;
window.calculateTrianglePerimeter = calculateTrianglePerimeter;
window.calculateTriangleArea = calculateTriangleArea;
window.calculateTriangleHeight = calculateTriangleHeight;
window.calculateCircleArea = calculateCircleArea;
window.calculateCirclePerimeter = calculateCirclePerimeter;
window.activateSquareForm = activateSquareForm;
window.activateTriangleForm = activateTriangleForm;
window.activateCircleForm = activateCircleForm;
window.activateTriangleCalculation = activateTriangleCalculation;
window.activateTriangleInputs = activateTriangleInputs;

