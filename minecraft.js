const gameBoard = document.querySelector('#game-board');
const shovelButton1 = document.querySelector('.button1');
const pickaxeButton2 = document.querySelector('.button2');
const axeButton3 = document.querySelector('.button3');
const holder = document.querySelector('#holder1');

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
  [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 2, 2, 0, 0, 3, 3, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 2, 2, 0, 0, 3, 3, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
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
  sky: { className: 'sky' },
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
      default:
        block.classList.add(materialObj.sky.className);
    }
    gameBoard.appendChild(block);
  });
});
const objTools = {
  shovel: { className: ['ground', 'grass'] },
  pickaxe: { className: 'rock' },
  axe: { className: ['tree', 'leaves'] },
};

// console.log(objTools.shovel.className[1]);
// console.log(objTools.shovel.className[1]);
shovelButton1.classList.add(objTools.shovel.className);
// console.log(shovelButton1.classList);
// console.log(shovelButton1.className);

//we get in to the button classlist and we add class from the objtool obj
pickaxeButton2.classList.add(objTools.pickaxe.className);
axeButton3.classList.add(objTools.axe.className);

let myTools = '';
shovelButton1.addEventListener('click', () => {
  myTools = 'shovel';
  axeButton3.style.background = '';
  shovelButton1.style.background = 'blue';
  pickaxeButton2.style.background = '';
});

pickaxeButton2.addEventListener('click', () => {
  axeButton3.style.background = '';
  shovelButton1.style.background = '';
  pickaxeButton2.style.background = 'blue';
  myTools = 'pickaxe';
});

axeButton3.addEventListener('click', () => {
  axeButton3.style.background = 'blue';
  shovelButton1.style.background = '';
  pickaxeButton2.style.background = '';
  myTools = 'axe';
});
// console.log(shovelButton1.className);

gameBoard.addEventListener('click', (e) => {
  switch (myTools) {
    case 'shovel':
      if (shovelButton1.className.includes(e.target.className)) {
        holder.classList = ' ';
        // holder.classList.add(e.target.className);
        holder.setAttribute('class', e.target.className);
        e.target.classList = 'sky';
      } else {
        shovelButton1.style.background = 'red';
      }
      break;
    case 'pickaxe':
      if (pickaxeButton2.className.includes(e.target.className)) {
        holder.classList = ' ';
        holder.setAttribute('class', e.target.className);
        e.target.classList = 'sky';
      } else {
        pickaxeButton2.style.background = 'red';
      }
      break;
    case 'axe':
      if (axeButton3.className.includes(e.target.className)) {
        holder.classList = ' ';
        holder.setAttribute('class', e.target.className);
        console.log(holder.classlist);
        // holder.classList.add(e.target.className);
        e.target.classList = 'sky';
      } else {
        axeButton3.style.background = 'red';
      }
      break;
  }
});
// holder.addEventListener('click', () => {
//   gameBoard.addEventListener('click', (e) => {
//     e.target.classList = '';
//     e.target.classList.add(holder.classList);
//   });
//   holder.classList = '';
// });
