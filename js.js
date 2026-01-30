const container = document.querySelector(".container");
const FIXED_GRID_ITEM = 4;

let randomColorGenerator = () => {
    let randomColor = Math.floor(Math.random() * 16777216).toString(16)
    randomColor = randomColor.padStart(6, '0');
    return randomColor;
}

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
}


container.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains('colOfSquareItem')) {
        e.target.style.backgroundColor = `#${randomColorGenerator()}`;
    }
})

createSketchPad(FIXED_GRID_ITEM);

const btnForChangeGridSize = document.querySelector('.changeGridSize');

btnForChangeGridSize.addEventListener('click', () => {

    const newGridSize = prompt("Enter grid size (Maximum is 100)");
    
    if (newGridSize > 100) {
        alert("You enter a value that greater than maximum ");
        createSketchPad(FIXED_GRID_ITEM);
        return;
    }
    createSketchPad(newGridSize);
})






