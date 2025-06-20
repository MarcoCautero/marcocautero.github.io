var c = document.getElementById("MainCanvas");
var ctx = c.getContext("2d");
var cw = $('#MainCanvas').attr('width');
var ch = $('#MainCanvas').attr('height');
var az = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var inputReady = false;
var grid = [];
var answers = [];
var minX = null;
var maxX = null;
var minY = null;
var maxY = null;
var selected = null;
var selectedDir = null;
var mouse_at = null;
var config = {
	'rows': 7,
	'cols': 6,
	'paddingLeft': 0,
	'paddingTop': 0,
	'boxWidth': 50,
	'boxHeight': 50,
	'fontSize': 28,
	'tolerance': 0,
	'words': [
		{ word: "PUPA", clue: "Gatto preferito di Max", start: [0, 1], dir: 1, num: 1 }, // [riga, colonna], 0 = orizzontale
  		{ word: "FILM", clue:"", start: [0,3], dir: 1, num: 2},
		{ word: "ALCOOL", clue:"", start: [0,4], dir: 1, num: 3},
  		{ word: "FUCILE", clue: "Lo imbracciava il Bepo al primo incontro con Max", start: [1, 0], dir: 0, num: 4},
  		{ word: "CALCIO", clue: "", start: [1, 2], dir: 1, num: 5},
  		{ word: "PALCO", clue: "", start: [2, 1], dir: 0, num: 6},
  		{ word: "CALMO", clue: "", start: [3, 0], dir: 0, num: 7},
  		{ word: "CIN", clue: "", start: [4, 5], dir: 1, num: 8},
  		{ word: "GHIBLI", clue: "", start: [5, 0], dir: 0, num: 9},
  		// { word: "ABITO", clue: "Oggi si è visto per la prima volta", start: [5, 1], dir: 0, num: 5 }
	]
};

var words = [];
config.words.forEach(function(word){
	words.push(word.word);
});

$(document).ready(function(){
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#000000';
	// showClues();
	init();
	// Repaint();
	// 
});

$(document).ready(function() {
    $('#field').click(function(e){
        $(this).focus();
    });
    $('#button').click(function(e) {
        $('#field').trigger('click');
    });
});

$(document).ready(function () {
  const canvas = document.getElementById("MainCanvas");

	$(canvas).on("mouseup", function (event) {
		if (inputReady) {
			const rect = canvas.getBoundingClientRect();
			const scaleX = canvas.width / rect.width;
			const scaleY = canvas.height / rect.height;

			const x = (event.clientX - rect.left) * scaleX;
			const y = (event.clientY - rect.top) * scaleY;

			mouse_at = [x, y];
			// hiddenInput.focus();	
			Repaint();
		}
	});

	$(canvas).click(function(e){
		console.log("click");
        hiddenInput.focus();
    });

});

$(window).keydown(function(event){
	if (inputReady){
		if (event.key === "ArrowUp"){
			if (selected !== null && grid[selected[0]][selected[1]-1] !== undefined && grid[selected[0]][selected[1]-1] !== ''){
				mouse_at = null;
				selected[1]--;
			}
		}
		
		else if (event.key === "ArrowDown"){
			if (selected !== null && grid[selected[0]][selected[1]+1] !== undefined && grid[selected[0]][selected[1]+1] !== ''){
				mouse_at = null;
				selected[1]++;
			}
		}
		
		else if (event.key === "ArrowLeft"){
			if (selected !== null && grid[selected[0]-1][selected[1]] !== undefined && grid[selected[0]-1][selected[1]] !== ''){
				mouse_at = null;
				selected[0]--;
			}
		}
		
		else if (event.key === "ArrowRight"){
			if (selected !== null && grid[selected[0]+1][selected[1]] !== undefined && grid[selected[0]+1][selected[1]] !== ''){
				mouse_at = null;
				selected[0]++;
			}
		}
		
		else {
			var key = event.key.toUpperCase();
			if (az.indexOf(key) !== -1){
				answers[selected[0]][selected[1]] = event.key.toUpperCase();
				mouse_at = null;
				SelectNext();
			}
		}
		
		Repaint();
	}
});

const canvas = document.getElementById('MainCanvas');
const hiddenInput = document.getElementById('hiddenInput');

function init() {
	// Imposta dimensioni canvas proporzionalmente
	var canvw = document.getElementById("MainCanvas").offsetWidth;
	var propH = Math.floor(canvw*(config.rows / config.cols));
	$('canvas').attr('height', propH);

	cw = canvw;
	ch = propH;

	// Crea griglia vuota
	grid = [];
	answers = [];
	for (let x = 0; x < config.cols; x++) {
		let yArr = [];
		for (let y = 0; y < config.rows; y++) {
		yArr.push('');
		}
		grid.push([...yArr]);
		answers.push([...yArr]);
	}

	// console.log("config.cols;:", config.cols);
	// Inserisci le parole fisse nella griglia
	config.words.forEach(wordObj => {
		const {word, start, dir} = wordObj;
		const [y, x] = start;

		for (let i = 0; i < word.length; i++) {
			const cx = dir === 0 ? x + i : x;
			const cy = dir === 1 ? y + i : y;
			grid[cx][cy] = word[i].toUpperCase();
			answers[cx][cy] = ''; // o pre-compilato se vuoi
		}
	});

	Repaint();
	inputReady = true;
}

function Repaint(){
	ctx.clearRect(0, 0, cw, ch);
	
	var refreshClues = true;
	if ($('.clue').length > 0){ refreshClues = false; }
	
	for (i=0; i<config.rows; i++){
		for (j=0; j<config.cols; j++){
			var letter = '';
			letter = grid[j][i];
			letter = letter.toUpperCase();

			if (letter === ''){
				ctx.beginPath();
				ctx.fillRect(config.paddingLeft + (j*config.boxWidth), config.paddingTop + (i*config.boxHeight), config.boxWidth, config.boxHeight);
				ctx.stroke();
			} else {
				ctx.beginPath();
				ctx.rect(config.paddingLeft + (j*config.boxWidth), config.paddingTop + (i*config.boxHeight), config.boxWidth, config.boxHeight);
				ctx.stroke();
				
				if (mouse_at !== null &&
					mouse_at[0] > config.paddingLeft + (j*config.boxWidth) && 
					mouse_at[1] > config.paddingTop + (i*config.boxHeight) &&
					mouse_at[0] < config.paddingLeft + (j*config.boxWidth) + config.boxWidth &&
					mouse_at[1] < config.paddingTop + (i*config.boxHeight) + config.boxHeight
				){ selected = [j,i];
  					// hiddenInput.focus();	
				} 
				
			}
			
			ctx.font = config.fontSize + "px Arial";
			//ctx.fillText(letter, config.paddingLeft + (j*config.boxWidth) + getFontOffset('x', letter), config.paddingTop + (i*config.boxHeight) + getFontOffset('y', letter));
			
			if (answers[j][i] !== ''){
				ctx.fillText(answers[j][i], config.paddingLeft + (j*config.boxWidth) + getFontOffset('x', answers[j][i]), config.paddingTop + (i*config.boxHeight) + getFontOffset('y', answers[j][i]));
			}
		}
	}

	var clueNo = 1;
	var clueHistory = [];
	for (i=0; i<config.words.length; i++){
		
		var dir = "Across"; if (config.words[i].dir === 1){ dir = "Down"; }

		if (clueHistory.indexOf(config.words[i].start[0] + "," + config.words[i].start[1]) === -1){
			var marginX = 4;
			var marginY = 14;
			
			if (clueNo > 9){ marginX = 2; marginY = 12; }
			
			ctx.font = 14 + "px Arial";
			ctx.fillText(clueNo, config.paddingLeft + (config.words[i].start[1]*config.boxWidth) + marginX, config.paddingTop + (config.words[i].start[0]*config.boxHeight) + marginY);
			ctx.font = config.fontSize + "px Arial";
				
			clueHistory.push(config.words[i].start[0] + "," + config.words[i].start[1]);				
			
			if (refreshClues){
				$('#Clues' + dir).append('<div class="clue" clue-id="' + clueNo + '">'+ clueNo + ". " + config.words[i].clue +'</div>');
			}
			
			clueNo++;
			
		}
	}
	
	for (i=0; i<clueNo; i++){
		$('#CluesAcross').append($('#CluesAcross .clue[clue-id='+ i +']'));
		$('#CluesDown').append($('#CluesDown .clue[clue-id='+ i +']'));
	}
	
	if (selected !== null){
		ctx.beginPath();
		ctx.strokeStyle = "#264cd7";
		ctx.lineWidth = 5;
		ctx.rect(config.paddingLeft + (selected[0]*config.boxWidth), config.paddingTop + (selected[1]*config.boxHeight), config.boxWidth, config.boxHeight);
		ctx.stroke();
		ctx.strokeStyle = "#000000";
		ctx.lineWidth = 2;
	}
	
	if (JSON.stringify(grid) === JSON.stringify(answers)){ Victory(); }
}

// function showClues() {
// 	const cluesContainerOriz = document.getElementById('CluesAcross');
// 	cluesContainerOriz.innerHTML = ''; // pulisci

// 	const cluesContainerVert = document.getElementById('CluesDown');
// 	cluesContainerVert.innerHTML = ''; // pulisci
	
// 	config.words.forEach((word, index) => {
// 		clue = '';
// 		var clue = document.createTextNode(`${word.num}. ${word.clue}`);
// 		const br = document.createElement("br");
// 		if(word.dir === 0){
// 			cluesContainerOriz.appendChild(clue);
// 			cluesContainerOriz.appendChild(br);
// 		} else {
// 			cluesContainerVert.appendChild(clue);
// 			cluesContainerVert.appendChild(br);
// 		}
		
// 	});

// }

function getFontOffset(axis, letter){
	/*
	* Seems weird this even needs to be a thing.. but hey-ho
	* Values are all eyeballed so don't trust anything to be 100% accurate
	*/
	var bw = config.boxWidth;
	var bh = config.boxHeight;
	var fs = config.fontSize;
	
	if (axis !== undefined && axis !== null && axis === 'x'){
		var xOffset = (bw / 2) - (fs / 3);
		
		if (letter !== undefined && letter !== null){
			if (letter === 'W'){
				xOffset -= (fs / 7);
			} else if (letter === 'Q'){
				xOffset -= (fs / 15);
			} else if (letter === 'I'){
				xOffset += (fs / 5);
			} else if (letter === 'O'){
				xOffset -= (fs / 20);
			} else if (letter === 'M'){
				xOffset -= (fs / 15);
			}
		}
		
		return Math.floor(xOffset);
	} else {
		var yOffset = (bh / 2) + (fs / 3);
		
		return Math.floor(yOffset);
	}
}

function SetBounds(x, y, dir, l){
	if (minX === null || x < minX){	minX = x; }
	if (minY === null || y < minY){ minY = y; }
	if (dir === 0){
		if (maxX === null || x + l - 1 > maxX){ maxX = x + l - 1; }
		if (maxY === null || y > maxY){ maxY = y; }
	} else {
		if (maxX === null || x > maxX){ maxX = x; }
		if (maxY === null || y + l - 1 > maxY){ maxY = y + l - 1; }
	}
}

function SelectNext(){
	var xPrev = false;
	var xNext = false;
	var yPrev = false;
	var yNext = false;
	
	var xNext2 = false;
	var yNext2 = false;
	
	if (selected[0] > 0){ xPrev = grid[selected[0]-1][selected[1]] !== '' && answers[selected[0]-1][selected[1]] === ''; }
	if (selected[0] < grid.length - 1){ xNext = grid[selected[0]+1][selected[1]] !== '' && answers[selected[0]+1][selected[1]] === ''; }
	if (selected[1] > 0){ yPrev = grid[selected[0]][selected[1]-1] !== '' && answers[selected[0]][selected[1]-1] === ''; }
	if (selected[1] < grid[0].length - 1){ yNext = grid[selected[0]][selected[1]+1] !== '' && answers[selected[0]][selected[1]+1] === ''; }
	
	if (selected[0] < grid.length - 2){ xNext2 = grid[selected[0]+2][selected[1]] !== '' && answers[selected[0]+2][selected[1]] === '' && answers[selected[0]+1][selected[1]] !== ''; }
	if (selected[1] < grid[0].length - 2){ yNext2 = grid[selected[0]][selected[1]+2] !== '' && answers[selected[0]][selected[1]+2] === '' && answers[selected[0]][selected[1]+1] !== ''; }
	
	if (xNext && !xPrev && selectedDir === 0){
		selected = [selected[0]+1,selected[1]];
	} else if (yNext && !yPrev && selectedDir === 1){
		selected = [selected[0],selected[1]+1];
	} else if (xNext2 && !xPrev){
		selected = [selected[0]+1,selected[1]];
		selectedDir = 0;
	} else if (yNext2 && !yPrev){
		selected = [selected[0],selected[1]+1];
		selectedDir = 1;
	} else if (xNext && !xPrev){
		selected = [selected[0]+1,selected[1]];
		selectedDir = 0;
	} else if (yNext && !yPrev){
		selected = [selected[0],selected[1]+1];
		selectedDir = 1;
	} else if (selected[0] < grid.length - 1 && grid[selected[0]+1][selected[1]] !== ''){
		selected = [selected[0]+1,selected[1]];
	} else if (selected[1] < grid[0].length - 1 && grid[selected[0]][selected[1]+1] !== ''){
		selected = [selected[0],selected[1]+1];
	}
}

function Victory(){
	inputReady = false;
	alert('Congratulazioni! Buoni festeggiamenti!');
}