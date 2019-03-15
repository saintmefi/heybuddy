
// Function scans 'grid' for possible winning combinations
function scanForStrike() {
	let result = 0;			// 0 = winning combination not found, 1 = found
	let num1, num2, num3;
	for (var i = 0; i < outcomes.length; i++) {
		num1 = outcomes[i][0]-1;
		num2 = outcomes[i][1]-1;
		num3 = outcomes[i][2]-1;
		if (grid[num1] == grid[num2] && grid[num1] == grid[num3] && grid[num1] != 0) {
			result = 1;
			continue;
		}
	}
	return result;
}

// Function displays notification. Parameters define message text and button text.
function messageOpen(messageText, messageButton) {
	document.getElementById("message-text").innerHTML = messageText;
	document.getElementById("message-button").innerHTML = messageButton;
	document.getElementById("message").style.display = "flex";
	document.getElementById("game").style.filter = "blur(15px)";
}
// Function closes notification
function messageClose(status) {
	if (document.getElementById("message-button").textContent == 'reload') {
		window.location.reload();
	}
	document.getElementById("message").style.display = "none";
	document.getElementById("game").style.filter = "blur(0px)";
}

// Main function, that handles all the visuals and game engine.
function myFunction(index) {
	if (grid[index] != 0) {
		messageOpen("no can do", "ok");
		return;
	}
	document.getElementsByTagName("button")[index].innerHTML = player;
	let tempPlayer = player;
	if (player == "X") {
		grid[index] = 1;
		document.getElementsByTagName("button")[index].style.backgroundColor = "yellow";
		player="O";
		document.getElementById("player").innerHTML = "Jugador " + player;
	} else {
		grid[index] = 2;
		document.getElementsByTagName("button")[index].style.backgroundColor = "pink";
		player = "X";
		document.getElementById("player").innerHTML = "Jugador " + player;
	}
	let result = scanForStrike();	// Check for winning combination
	if (result == 1) {
		messageOpen("Jugador"+ " " + tempPlayer+ " " + "gana", "Otra vez"); 
	}
	if (grid.includes(0) == false) {
		messageOpen("Empate", "Otra vez"); 
	}
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Game starts with player "X"
let player = "X";

// Empty grid
let grid = [0,0,0,0,0,0,0,0,0];

// All possible winning combinations, total of 8.
let outcomes = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], 
				[2,5,8], [3,6,9], [1,5,9], [7,5,3]];
