const grid = document.querySelector(".grid");
const gridSize = 16;

function createGrid(gridSize) {
    for (let i=0; i<gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        grid.appendChild(cell);
    }    
}

createGrid(gridSize)

const cells = document.querySelectorAll('.grid-cell');

cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style["background-color"] = "black";
    })
}) 



