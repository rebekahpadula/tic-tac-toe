var prompt = require('prompt-sync').prompt

var board = [
	['', '', ''],
	['', '', ''],
	['', '', '']
];

var player1 = 'X';
var player2 = 'O';
var isWinner = false;
var currentPlayer = player1

console.log("player1 what is your name?");
prompt();
console.log("player2 what is your name?");
prompt();

while (!isWinner) {
	userInput = prompt().split(' ')

	row = parseInt(userInput[0]) -1
	column = parseInt(userInput[1]) -1

	gameRow = board[row]

	gameCol = gameRow[column];

	gameRow[column] = currentPlayer



	if(currentPlayer===player1)
	{
		currentPlayer = player2;
	}
	else {
		currentPlayer = player1;
	}


if (userInput === NaN)

	{
		console.log("Invalid move, try again!");
	}
	else {
	
		console.log("Switch player!");
	}


	console.log("    1   2   3  ");
	console.log("  ~~~~~~~~~~~~~");
	console.log("1 | " + board[0][0] + " | " + board[0][1] + " | " +board[0][2] + " |");
	console.log("  ~~~~~~~~~~~~~");
	console.log("2 | " + board[1][0] + " | " + board[1][1] + " | " + board[1][2] + " |");
	console.log("  ~~~~~~~~~~~~~");
	console.log("3 | " + board[2][0] + " | " + board[2][1] + " | " + board[2][2] + " |");
	console.log("  ~~~~~~~~~~~~~");


}


// if (userInput === NaN)
// 	if (userInput < 1)
// 		if(userInput > 3)
// 	{
// 		console.log("Invalid move, try again!");
// 	}
// 	else {
// 		console.log("Switch player!");
// 	}






// //start game
// currentPlayer = "O"
// moves = 0;
// gameOver = false;

// for(i=0; gameOver=false; i++);







