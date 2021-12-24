const button = document.querySelector('.btn');
const die1 = document.getElementById('die1');
const die2 = document.getElementById('die2');
const winner = document.getElementById('title');
let p1score = document.getElementById('p1score');
let p2score = document.getElementById('p2score');
const refresh = document.getElementById('ref');

p1score.innerText = Number(0);
p2score.innerText = Number(0);

const dieRoll = () => {
	refresh.style.visibility = 'visible';
	const dieThrow1 = Math.floor(Math.random() * 6 + 1);
	const dieThrow2 = Math.floor(Math.random() * 6 + 1);
	if (dieThrow1 === dieThrow2) {
		winner.innerText = 'DRAW';
	} else if (dieThrow1 > dieThrow2) {
		winner.innerText = 'Player 1 wins!';
		p1score.innerText++;
	} else {
		winner.innerText = 'Player 2 wins!';
		p2score.innerText++;
	}

	return (
		(die1.src = `images/dice${dieThrow1}.png`),
		(die2.src = `images/dice${dieThrow2}.png`)
	);
};

button.addEventListener('click', dieRoll);
refresh.addEventListener('click', () => {
	return location.reload();
});
