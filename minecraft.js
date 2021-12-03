const gameBoard = document.querySelector('#game-board');

const gameBoardMatrix = [
  //18*18
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 2, 2, 0, 0, 3, 3, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 2, 2, 0, 0, 3, 3, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];

const materialObj = {
  tree: { className: 'tree', id: 1 },
  leaves: { className: 'leaves', id: 2 },
  rock: { className: 'rock', id: 3 },
  ground: { className: 'ground', id: 4 },
  grass: { className: 'grass', id: 5 },
  cloud: { className: 'cloud', id: 6 },
};

// runs on each row
gameBoardMatrix.forEach((row, yIndex) => {
  // runs on each column
  row.forEach((column, xIndex) => {
    // save current position id
    const currentPositionId = gameBoardMatrix[yIndex][xIndex];
    // create a block
    const block = document.createElement('div');
    // add style by id
    switch (currentPositionId) {
      case 1:
        block.classList.add(materialObj.tree.className);
        break;
      case 2:
        block.classList.add(materialObj.leaves.className);
        break;
      case 3:
        block.classList.add(materialObj.rock.className);
        break;
      case 4:
        block.classList.add(materialObj.ground.className);
        break;
      case 5:
        block.classList.add(materialObj.grass.className);
        break;
      case 6:
        block.classList.add(materialObj.cloud.className);
        break;
    }
    gameBoard.appendChild(block);
  });
});

let isclick = false;
let selectedtool = ' ';
const button1 = document.querySelector('.button1');
button1.addEventListener('click', () => {
  isclick = true;
  selectedtool = 'pickaxe';
});

const button2 = document.querySelector('.button2');
button2.addEventListener('click', () => {
  isclick = true;
  selectedtool = 'axe';
});
gameBoard.addEventListener('click', (e) => {
  console.log(e.target.classList.value);
  console.log(selectedtool);
  switch (selectedtool) {
    case 'pickaxe':
      // console.log('hila');
      if (e.target.classList.value === 'rock') {
        e.target.classList.remove('rock');
      }
      break;
    case 'axe':
      if (e.target.classList.value === 'ground') {
        e.target.classList.remove('ground');
      }
  }
});
