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
}

createSketchPad(FIXED_GRID_ITEM);


