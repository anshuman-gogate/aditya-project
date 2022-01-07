// For rectangle
const rectLength = document.getElementById('length');
const rectBreadth = document.getElementById('breadth');
const rectBtn = document.getElementById('rec-btn');
const rectAns = document.getElementById('rect-answer');
const rectClrBtn = document.getElementById('rect-clear-btn');

// For Square
const sqSide = document.getElementById('side');
const sqBtn = document.getElementById('sq-btn');
const sqAns = document.getElementById('sq-answer');
const sqClrBtn = document.getElementById('sq-clear-btn');

// For Circle
const cirRad = document.getElementById('radius');
const cirBtn = document.getElementById('cir-btn');
const cirAns = document.getElementById('cir-answer');
const cirClrBtn = document.getElementById('cir-clear-btn');

// For Triangle
const triHeight = document.getElementById("height");
const triBase = document.getElementById("base");
const triBtn = document.getElementById("tri-btn");
const triAns = document.getElementById("tri-answer");
const triClrBtn = document.getElementById('tri-clear-btn');

// Function to calculate the area of rectangle
function calculateRect() {
    const area = rectLength.value*rectBreadth.value; // area of rectangle
    // console.log(rectAns);
    rectAns.innerText = "The area of rectangle is " + area + " unit sq.";
    // rectAns.innerText = area;
}

// Function to calculate the area of square
function calculateSq() {
    const area = sqSide.value * sqSide.value;
    sqAns.innerText = "The area of square is " + area + " unit sq.";
}

// Function to calculate the area of circle
function calculateCircle() {
    const area = cirRad.value * cirRad.value * 3.14;
    cirAns.innerText = "The area of circle is " + area + " unit sq.";
}

// Function to calculate the area of triangle
function calculateTri() {
    const area = 0.5 * triBase.value * triHeight.value;
    triAns.innerText = "The area of triangle is " + area + " unit sq.";
}

rectBtn.addEventListener('click', calculateRect);
sqBtn.addEventListener('click', calculateSq);
cirBtn.addEventListener('click', calculateCircle);
triBtn.addEventListener('click', calculateTri);

// clear button event listeners\
rectClrBtn.addEventListener('click', () => {
    rectLength.value = 0;
    rectBreadth.value = 0;
    rectAns.innerText = ""
})

sqClrBtn.addEventListener('click', () => {
    sqSide.value = 0;
    sqAns.innerText = "";
})

cirClrBtn.addEventListener('click', () => {
    cirRad.value = 0;
    cirAns.innerText = "";
})

triClrBtn.addEventListener('click', () => {
    triBase.value = 0;
    triHeight.value = 0;
    triAns.innerText = "";
})