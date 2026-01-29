const container = document.querySelector(".container");
const FIXED_GRID_ITEM = 4;

function createSketchPad(gridItem)
{
    container.innerHTML = '';
    for(let i = 0; i < gridItem; i++)
    {
        let rowGrid = document.createElement("div");
        rowGrid.classList.add('rowOfSquareItem');
        container.appendChild(rowGrid);

        for(let j = 0; j < gridItem; j++)
        {
            let colGrid = document.createElement("div");
            colGrid.classList.add('colOfSquareItem')
            rowGrid.appendChild(colGrid)
        }
    }

    const colorOfGrid = document.querySelectorAll(".colOfSquareItem");

    colorOfGrid.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "red";
    })
})
}

createSketchPad(FIXED_GRID_ITEM);


const btnForChangeGridSize = document.querySelector('.changeGridSize');

btnForChangeGridSize.addEventListener('click', () => {

    const newGridSize = prompt("Enter grid size (Maximum is 100)");
    
    if (newGridSize > 100) {
        alert("You enter a value that greater than maximum ");
        createSketchPad(FIXED_GRID_ITEM);
        return;
    }
    container.innerHTML = "";
    createSketchPad(newGridSize);
})






