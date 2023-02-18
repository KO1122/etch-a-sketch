const grid = document.querySelector(".grid");
const gridSize = 16;

function createGrid(gridSize) {

    grid.style["grid-template-columns"] = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        grid.appendChild(cell);

    }    
}

function removeGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
}

// TBD - Maybe change to text or slider 
const updateButton = document.querySelector(".button-grid-size");
updateButton.addEventListener('click', updateGrid);

function updateGrid() {
    let newSize = prompt("Please enter a new size for a n x n grid. (Maxsize is 100)");
    // Fix error handling for strings
    while (newSize > 100) {
        newSize = prompt("Enter a valid size. (Max size is 100)");
    }
    if (!newSize) {
        return
    }
    removeGrid();
    createGrid(newSize);
    hoverBlack();
}

// Returns grid cells to default state with white background
const clearButton = document.querySelector(".button-clear-grid"); 
clearButton.addEventListener('click', clearGrid);

function clearGrid() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.style.removeProperty("background-color");
    }) 
}

// Black button and functionality 
const blackButton = document.querySelector(".button-hover-black"); 
blackButton.addEventListener('click', hoverBlack);

function hoverBlack() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style["background-color"] = "black";
        })
    }) 
}

// Shading button and functionality 
const shadeButton = document.querySelector(".button-hover-shade"); 
shadeButton.addEventListener('click', hoverShade);

function hoverShade() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        let rgbValue = 211;
        cell.addEventListener('mouseover', () => {

            // If cell is gray or partially black 
            // Black has value of rgb(0,0,0)
            if (cell.style["background-color"] != "rgb(0,0,0)") {
                cell.style["background-color"] = `rgb(${rgbValue},${rgbValue},${rgbValue})`;
                rgbValue -= 21.1;
            }
        })
    }) 
}

// Random button and functionality 
const randomButton = document.querySelector(".button-hover-random"); 
randomButton.addEventListener('click', hoverRandom);

function hoverRandom() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        
        cell.addEventListener('mouseover', () => {
            // 16777215 is the total number of combinations of possible rgb colors 
            // toString method will convert decimal number to hex
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            cell.style["background-color"] = `#${randomColor}`;
        })
    }) 
}

createGrid(gridSize)
hoverBlack()