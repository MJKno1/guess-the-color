var numberOfSquare = 6;
var colors = generateRandomColor(numberOfSquare);
var squares = document.querySelectorAll(".square");
var colorPicked = pickColor();
var rgbDisplay = document.getElementById("rgbDisplay");
var msgDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var diffBtn = document.querySelectorAll(".difficulty")

for (var i = 0; i < diffBtn.length; i++) {
	diffBtn[i].addEventListener("click", function () {
		diffBtn[0].classList.remove("selected");
		diffBtn[1].classList.remove("selected");
		this.classList.add("selected")
		this.textContent === "Easy" ? numberOfSquare = 3 : numberOfSquare = 6;
		reset();
	});
}

function reset() {
	//generate new color for each square
	colors = generateRandomColor(numberOfSquare);
	//pick new random color
	colorPicked = pickColor();
	rgbDisplay.textContent = colorPicked;
	this.textContent = 'New Colors'
		//change each square color 
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	msgDisplay.textContent = "";
}


resetBtn.addEventListener("click", function () {
	reset();
	this.textContent = "New Colors";
});

rgbDisplay.textContent = colorPicked;

for (var i = 0; i < squares.length; i++) {
	// add colors to square
	squares[i].style.background = colors[i];
	//add event click to squares
	squares[i].addEventListener("click", function () {
		//grab the color of clicked square
		var clickedColor = this.style.background;
		//check if guess is correct
		if (colorPicked === clickedColor) {
			msgDisplay.textContent = "Correct";
			//change all square color to inital question color;
			changeColor(colorPicked);
			//change h1 background color to inital question color;
			h1.style.background = colorPicked;
			resetBtn.textContent = "Play Again ?";
		} else {
			//if guess is wrong, change the clicked square color
			this.style.background = "#232323";
			msgDisplay.textContent = "Try Again";
		}
	});
}
//change each square color
function changeColor(color) {
	//loop through all square to match all square to given color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}
//pick new question color
function pickColor() {
	//generate random number
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}
//generate num random color for each square
function generateRandomColor(num) {
	var arr = [];
	// loop num times
	for (var i = 0; i < num; i++) {
		//generate random number and push it to arr
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	//generate  random number from 0-255 for red,blue&green color
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}