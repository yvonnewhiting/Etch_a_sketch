const gridContainer = document.querySelector('.gridContainer');

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(dimension) {
    const size = 800; // Define the size of the grid, e.g., 800x800 pixels
    gridContainer.style.width = `${size}px`;
    gridContainer.style.height = `${size}px`;

    const cellsPerRow = size / dimension; // Cells per row and column

    gridContainer.innerHTML = '';
    for (let i = 0; i < cellsPerRow; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < cellsPerRow; j++) {
            let cell = document.createElement('div');
            cell.classList.add('col');
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
}

gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains('col') && !e.target.dataset.colored) {
        e.target.style.backgroundColor = getRandomRGBColor();
        e.target.dataset.colored = 'true'; // Mark the cell as colored
    }
});

document.getElementById('resetButton').addEventListener('click', () => {
    const cells = document.querySelectorAll('.col');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'rgb(255, 255, 255)'; // Resets to white
        cell.removeAttribute('data-colored'); // Remove the colored flag so it can change again
    });
});

const userGridSize = prompt("Enter grid size (e.g., 16 for 4x4 grid):");
createGrid(Math.sqrt(userGridSize));