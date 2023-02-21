const grid = document.querySelector(".grid");
const gridSize = 16;

createGrid(gridSize);
hoverBlack();

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

// Adjusting the slider will change the grid size 
// Grid size display will also be updated 
const gridSizeDisplay = document.querySelector('.grid-size-display');
const sliderGridSize = document.querySelector('.grid-size-slider');
sliderGridSize.addEventListener('input', (e) => updateGridSizeDisplay(e.target.value));
sliderGridSize.addEventListener('change', clearGrid);

// Updates the default display of 16 x 16 
function updateGridSizeDisplay (newSize){
    gridSizeDisplay.innerText = `${newSize} x ${newSize}`;
}

// Clears grid cells  
const clearButton = document.querySelector(".grid-button-clear"); 
clearButton.addEventListener('click', clearGrid);

function clearGrid() {
    let newSize = sliderGridSize.value;
    removeGrid();
    createGrid(newSize);

    // Previously used hover button will continue to apply to cleared grid 
    if (grid.id === "hover-black") {
        hoverBlack();
    }
    else if (grid.id === "hover-shade") {
        hoverShade();
    }
    else if (grid.id === "hover-random") {
        hoverRandom();
    }
    else if (grid.id === "hover-white") {
        hoverWhite();
    }
}

// Black button and functionality 
const blackButton = document.querySelector(".button-hover-black"); 
blackButton.addEventListener('click', hoverBlack);

function hoverBlack() {
    const cells = document.querySelectorAll('.grid-cell');
    grid.setAttribute("id", "hover-black");
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
    grid.setAttribute("id", "hover-shade");
    cells.forEach(cell => {
        let rgbValue = 211;
        cell.addEventListener('mouseover', () => {
            // If cell is gray or partially black, darken the cell
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
    grid.setAttribute("id", "hover-random");
    cells.forEach(cell => {
        
        cell.addEventListener('mouseover', () => {
            // 16777215 is the total number of combinations of possible rgb colors 
            // toString method will convert decimal number to hex
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            cell.style["background-color"] = `#${randomColor}`;
        })
    }) 
}

// Eraser button and functionality 
const eraserButton = document.querySelector(".button-hover-eraser"); 
eraserButton.addEventListener('click', hoverWhite);

function hoverWhite() {
    const cells = document.querySelectorAll('.grid-cell');
    grid.setAttribute("id", "hover-white");
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style["background-color"] = "white";
        })
    })  
}