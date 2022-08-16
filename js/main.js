const reloadButton = document.querySelector('[data-game="reload-button"]');

reloadButton.addEventListener('click', () => {
  reloadButton.classList.toggle('game__button--active');
  diceRoll();
});

function diceRoll() {
  const firstDice = document.querySelector('[data-game="first-dice"]');
  const secondDice = document.querySelector('[data-game="second-dice"]');
  
  const playerOne = getPlayer(0);
  const playerTwo = getPlayer(1);

  setScore(playerOne, firstDice);
  setScore(playerTwo, secondDice);

  setWinner(playerOne, playerTwo);
}

function setWinner(playerOne, playerTwo) {
  if (playerOne.score === playerTwo.score) showWinner('Draw!🤝');
  if (playerOne.score > playerTwo.score) showWinner('Player 01 Wins! 🚩');
  if (playerOne.score < playerTwo.score) showWinner('Player 02 Wins! 🚩');
}

function showWinner(winner) {
  const gameTitle = document.querySelector('[data-game="title"]');
  gameTitle.innerText = winner;
}

function setScore(player, dice) {
  dice.setAttribute('src', `img/dice-${player.score}.svg`);
}

function getPlayer(number) {
  const player = document.querySelectorAll('.player')[number];
  const name = player.innerText;
  const score = dice();
  return Player(name, score);
}

function dice() {
  return Math.floor((Math.random() * 6) + 1);
}

function Player(name, score) {
  return {
    name,
    score
  };
}