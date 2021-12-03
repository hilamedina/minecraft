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
