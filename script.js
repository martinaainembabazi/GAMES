let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

// Function to handle cell click
function handleCellClick(event) {
	const cellIndex = event.target.id.split('-')[1];
	if (gameBoard[cellIndex] === '') {
		gameBoard[cellIndex] = currentPlayer;
		event.target.textContent = currentPlayer;
		checkForWinner();
		switchPlayer();
	}
}

// Function to check for winner
function checkForWinner() {
	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (const combination of winningCombinations) {
		if (
			gameBoard[combination[0]] !== '' &&
			gameBoard[combination[0]] === gameBoard[combination[1]] &&
			gameBoard[combination[0]] === gameBoard[combination[2]]
		) {
			alert(`Player ${gameBoard[combination[0]]} wins!`);
			resetGame();
			return;
		}
	}

	if (!gameBoard.includes('')) {
		alert('It\'s a draw!');
		resetGame();
	}
}

// Function to switch player
function switchPlayer() {
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to reset game
function resetGame() {
	gameBoard = ['', '', '', '', '', '', '', '', ''];
	currentPlayer = 'X';
	document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}

// Add event listeners to cells
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));

// Add event listener to reset button
document.getElementById('reset-button').addEventListener('click', resetGame);
