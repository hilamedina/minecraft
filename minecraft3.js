const gameBoard2 = document.querySelector('#game-board2');
const shovelButton1 = document.querySelector('.button1');
const pickaxeButton2 = document.querySelector('.button2');
const axeButton3 = document.querySelector('.button3');

const gameBoardMatrix2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];
const materialObj = {
  greenBrick: { className: 'greenBrick', id: 1 },
  yellowheart: { className: 'yellowheart', id: 2 },
  grayheart: { className: 'grayheart', id: 3 },
  yellowBrick: { className: 'yellowBrick', id: 4 },
  redheart: { className: 'redheart', id: 6 },
  sky: { className: 'sky' },
};

// runs on each row
gameBoardMatrix2.forEach((row, yIndex) => {
  // runs on each column
  row.forEach((column, xIndex) => {
    // save current position id
    const currentPositionId = gameBoardMatrix2[yIndex][xIndex];
    // create a block
    const block = document.createElement('div');
    // add style by id
    switch (currentPositionId) {
      case 1:
        block.classList.add(materialObj.greenBrick.className);
        break;
      case 2:
        block.classList.add(materialObj.yellowheart.className);
        break;
      case 3:
        block.classList.add(materialObj.grayheart.className);
        break;
      case 4:
        block.classList.add(materialObj.yellowBrick.className);
        break;
      case 6:
        block.classList.add(materialObj.redheart.className);
        break;
      default:
        block.classList.add(materialObj.sky.className);
    }
    gameBoard2.appendChild(block);
  });
});
const objTools = {
  shovel: { className: ['grayheart', 'greenBrick'] },
  pickaxe: { className: 'grayheart' },
  axe: { className: ['yellowBrick', 'redheart'] },
};
shovelButton1.classList.add(objTools.shovel.className);
pickaxeButton2.classList.add(objTools.pickaxe.className);
axeButton3.classList.add(objTools.axe.className);
