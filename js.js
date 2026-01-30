const container = document.querySelector(".container");
const FIXED_GRID_ITEM = 16;

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
let newGridSize = 0;
let temp = 0;

btnForChangeGridSize.addEventListener('click', () => {
    temp = newGridSize;
    newGridSize = prompt("Enter grid size (Maximum is 100)");
     
    if (newGridSize > 100) {
        alert("You enter a value that greater than maximum ");
        newGridSize = temp;
        return;
    }
    createSketchPad(newGridSize);
})


let isEraseActive = false;

const btnForEraseGridItem = document.querySelector(".eraseGridItem");

btnForEraseGridItem.addEventListener('click', eraseGridItem);

function eraseGridItem(){

    if(isEraseActive)
    {
        container.addEventListener('mouseover', (e) => {
            if(e.target.classList.contains('colOfSquareItem')) {
                e.target.style.backgroundColor = `#${randomColorGenerator()}`;
            }
        })
    }
    else
    {
        container.addEventListener('mouseover', (e) => {
            if(e.target.classList.contains('colOfSquareItem')) {
                e.target.style.backgroundColor = "";
            }
        })
    }
    isEraseActive = !isEraseActive;
}

const btnForClearSketchPad = document.querySelector('.clearSketchPad');

btnForClearSketchPad.addEventListener('click', () => {

    if (newGridSize === 0) {
        createSketchPad(FIXED_GRID_ITEM);
    }else{
        createSketchPad(newGridSize);

    }

    container.forEach(item => {
        item.target.style.backgroundColor = "";
    })
})





