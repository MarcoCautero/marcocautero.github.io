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
	'rows': 'auto',
	'cols': 'auto',
	'paddingLeft': 0,
	'paddingTop': 0,
	'boxWidth': 100,
	'boxHeight': 100,
	'fontSize': 28,
	'tolerance': 0,
	'words': [
		{ word: "PUPA", clue: "Gatto preferito di Max", start: [0, 1], dir: 1 }, // [riga, colonna], 0 = orizzontale
  		{ word: "SICILIA", clue: "Primo viaggio di coppia", start: [0, 3], dir: 1 },
  		{ word: "Rex", clue: "Il T... da ingresso in chiesa", start: [0, 5], dir: 1 },
  		{ word: "FUCILE", clue: "Lo imbracciava il Bepo al primo incontro con Max", start: [1, 0], dir: 0 },
  		{ word: "ABITO", clue: "Oggi si è visto per la prima volta", start: [5, 1], dir: 0 }
		// { 'word': 'crossword',	'clue': 'What you\'re doing right now!' },
		// { 'word': 'water', 		'clue': 'Another name for dihydrogen monoxide.' },
		// { 'word': 'jedi', 		'clue': 'The good guys in Star Wars.' },
		// { 'word': 'sith', 		'clue': 'The bad guys in Star Wars.' },
		// { 'word': 'fog', 		'clue': 'A thicker form of mist.' },
		// { 'word': 'school', 	'clue': 'Where you go to learn.' },
		// { 'word': 'bank', 		'clue': 'Where money is kept safe.' },
		// { 'word': 'grass', 		'clue': 'Always greener on the other side.' },
		// { 'word': 'coin', 		'clue': 'A solid form of physical currency.' },
		// { 'word': 'train', 		'clue': 'A method of transport that uses a track.' }
	]
};

var words = [];
config.words.forEach(function(word){
	words.push(word.word);
});

$(document).ready(function(){
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#000000';
	init();
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
      Repaint();
    }
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

function init() {
  // Imposta dimensioni canvas proporzionalmente
  var propW = Math.floor(ch * ($('canvas').width() / $('canvas').height()));
  $('canvas').attr('width', propW);
  cw = propW;

  if (config.cols === 'auto') {
    config.cols = 6; // o quello che vuoi
  }
  if (config.rows === 'auto') {
    config.rows = 7;
  }

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
    const { word, start, dir } = wordObj;
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

/* 
function init(){
	var propW = Math.floor(ch * ($('canvas').width() / $('canvas').height()));
  $('canvas').attr('width', propW);
  cw = propW;
  
  if (config.cols === 'auto'){ config.cols = Math.floor((parseInt($('canvas').attr('width')) - config.paddingLeft) / config.fontSize / 2); }
	if (config.rows === 'auto'){ config.rows = Math.floor((parseInt($('canvas').attr('height')) - config.paddingTop) / config.fontSize / 2); }
  
  var notPlaced = null;
	var maxPlacementAttempts = 999;
	while ((notPlaced === null || notPlaced.length > config.tolerance) && maxPlacementAttempts > 0){
		grid = [];
		for (x=0; x < 250; x++){
			var yArr = [];
			for (y=0; y < 250; y++){
				yArr.push('');
			}
			
			grid.push(yArr);
		}
		
		notPlaced = [];	
		minX = null;
		maxX = null;
		minY = null;
		maxY = null;
		var placed = [];
		var startingWordIndex = Math.floor(Math.random() * config.words.length);
		var startingWordDir = Math.floor(Math.random() * 2);
		
		config.words.forEach(function(word, i){
			if (i === startingWordIndex){
				placed.push({ word:word.word, dir:startingWordDir, x:99, y:99 });
				SetBounds(99, 99, startingWordDir, word.word.length);
			} else {
				notPlaced.push(word.word);
			}
		});	
		
		notPlaced.forEach(function(){
			var potentialMatches = [];
			var safeMatches = [];
			var safeMultiMatches = [];
			
			placed.forEach(function(word){
				var altDir = 0;
				if (word.dir === altDir){ altDir = 1; }
				
				for (i=0; i<word.word.length; i++){
					notPlaced.forEach(function(w){
						for (j=0; j<w.length; j++){
							if (word.word[i] === w[j]){
								var cx = 0;
								var cy = 0;
								
								if (altDir === 0){
									cx = word.x - j;
									cy = word.y + i;
								} else {
									cx = word.x + i;
									cy = word.y - j;
								}
													
								potentialMatches.push({ word:w, dir:altDir, x:cx, y:cy });
							}
						}
					});
				}
			});
			
			var wordCoords = [];
			placed.forEach(function(word){
				for (i=0; i<word.word.length; i++){
					if (word.dir === 0){
						wordCoords.push({ x:word.x + i, y:word.y, letter: word.word[i], dir:word.dir });
					} else {
						wordCoords.push({ x:word.x, y:word.y + i, letter: word.word[i], dir:word.dir });
					}
				}
			});
			
			potentialMatches.forEach(function(match,limit){
				var matchCoords = [];
				
				for (i=0; i<match.word.length; i++){
					if (match.dir === 0){
						matchCoords.push({ x:match.x + i, y:match.y, letter: match.word[i], dir:match.dir });
					} else {
						matchCoords.push({ x:match.x, y:match.y + i, letter: match.word[i], dir:match.dir });
					}
				}
				
				var safeMatch = true;
				var matchCounter = 0;
				var linkCoords = [];
				
				for (i=0; i<matchCoords.length; i++){
					var coordA = matchCoords[i];
					wordCoords.forEach(function(coordB){
						if (coordA.x === coordB.x && coordA.y === coordB.y){
							if (coordA.letter === coordB.letter && coordA.dir !== coordB.dir){
								matchCounter++;
								linkCoords.push(coordA.x + ':' + coordA.y);
							} else {
								safeMatch = false;
							}
						}
					});
				}
				
				if (safeMatch){
					for (i=0; i<matchCoords.length; i++){
						var checkUp = '';
						var checkDown = '';
						var checkLeft = '';
						var checkRight = '';
						var coordA = matchCoords[i];
						
						var j = 1;
						while (checkUp.indexOf(',') === -1){
							if (coordA.x >= 0 && coordA.x <= grid.length - 1){
								if (coordA.y-j >= 0 && coordA.y-j <= grid[coordA.x].length - 1){
									if (grid[coordA.x][coordA.y-j] !== ''){
										if (!linkCoords.includes(coordA.x + ':' + (coordA.y-j))){
											checkUp = grid[coordA.x][coordA.y-j] + checkUp;
										}
									} else { checkUp += ','; }
								} else { checkUp += ','; }
							} else { checkUp += ','; }
							
							j++;
						}
						
						checkUp = checkUp.replace(',','');
						
						j=1;
						while (checkDown.indexOf(',') === -1){
							if (coordA.x >= 0 && coordA.x <= grid.length - 1){
								if (coordA.y+j >= 0 && coordA.y+j <= grid[coordA.x].length - 1){
									if (grid[coordA.x][coordA.y+j] !== ''){
										if (!linkCoords.includes(coordA.x + ':' + (coordA.y+j))){
											checkDown += grid[coordA.x][coordA.y+j];
										}
									} else { checkDown += ','; }
								} else { checkDown += ','; }
							} else { checkDown += ','; }
							
							j++;
						}
							
						checkDown = checkDown.replace(',','');
						
						j=1;
						while (checkLeft.indexOf(',') === -1){
							if (coordA.x-j >= 0 && coordA.x-j <= grid.length - 1){
								if (coordA.y >= 0 && coordA.y <= grid[coordA.x-j].length - 1){
									if (grid[coordA.x-j][coordA.y] !== ''){
										if (!linkCoords.includes((coordA.x-j) + ':' + coordA.y)){
											checkLeft = grid[coordA.x-j][coordA.y] + checkLeft;
										}
									} else { checkLeft += ','; }
								} else { checkLeft += ','; }
							} else { checkLeft += ','; }
							
							j++;
						}
							
						checkLeft = checkLeft.replace(',','');
						
						j=1;
						while (checkRight.indexOf(',') === -1){
							if (coordA.x+j >= 0 && coordA.x+j <= grid.length - 1){
								if (coordA.y >= 0 && coordA.y <= grid[coordA.x+j].length - 1){
									if (grid[coordA.x+j][coordA.y] !== ''){
										if (!linkCoords.includes((coordA.x+j) + ':' + coordA.y)){
											checkRight += grid[coordA.x+j][coordA.y];
										}
									} else { checkRight += ','; }
								} else { checkRight += ','; }
							} else { checkRight += ','; }
							
							j++;
						}
							
						checkRight = checkRight.replace(',','');
						
						var checkV = checkUp + match.word[i] + checkDown;
						if (checkV.length > 1 && !words.includes(checkV)){ safeMatch = false; }
						
						var checkH = checkLeft + match.word[i] + checkRight;
						if (checkH.length > 1 && !words.includes(checkH)){ safeMatch = false; }
					}
				}
				
				if (safeMatch){
					if (matchCounter > 1){
						safeMultiMatches.push(match);
					} else {
						safeMatches.push(match);
					}
				}
			});
			
			if (safeMultiMatches.length > 0){
				var bestMatch = safeMultiMatches[Math.floor(Math.random() * safeMultiMatches.length)];
				placed.push(bestMatch);
				SetBounds(bestMatch.x, bestMatch.y, bestMatch.dir, bestMatch.word.length);
				notPlaced = notPlaced.filter(function(value){ return value != bestMatch.word; });
			} else if (safeMatches.length > 0) {
				var bestMatch = safeMatches[Math.floor(Math.random() * safeMatches.length)];
				placed.push(bestMatch);
				SetBounds(bestMatch.x, bestMatch.y, bestMatch.dir, bestMatch.word.length);
				notPlaced = notPlaced.filter(function(value){ return value != bestMatch.word; });
			}
			
			placed.forEach(function(word){
				for (i=0; i<word.word.length; i++){
					if (word.dir === 0){
						grid[word.x + i][word.y] = word.word[i];
					} else {
						grid[word.x][word.y + i] = word.word[i];
					}
				}
			});
		});
		
		if (maxX - minX >= config.cols - 1){ notPlaced = null; }
		if (maxY - minY >= config.rows - 1){ notPlaced = null; }
		
		maxPlacementAttempts--;
	}
	
	if (maxPlacementAttempts === 0){
		alert('Unable to support tolerance of: ' + config.tolerance + ', please increase the tolerace in order to successfully build the crossword.');
	} else {
		// Get the bounding box (minX, maxX, minY, maxY) and re-position for draw
		grid = [];
		for (x=0; x < config.cols; x++){
			var yArr = [];
			for (y=0; y < config.rows; y++){
				yArr.push('');
			}
				
			grid.push(yArr);
			answers.push(JSON.parse(JSON.stringify(yArr)));
		}
		
		placed.forEach(function(word){
			for (i=0; i<word.word.length; i++){
				if (word.dir === 0){
					grid[word.x + i - minX][word.y - minY] = word.word[i].toUpperCase();
				} else {
					grid[word.x - minX][word.y + i - minY] = word.word[i].toUpperCase();
				}
				
				if (i===0){
					for (j=0; j<config.words.length; j++){
						if (word.word === config.words[j].word){
							config.words[j].start = [word.x + i - minX, word.y - minY];
							config.words[j].dir = word.dir;
						}
					}
				}
			}
		});
    
    var minW = (maxX - minX + 1) * config.boxWidth + config.paddingLeft;
    var minH = (maxY - minY + 1) * config.boxHeight + config.paddingTop;
    
    // Rescale width to respect aspect ratio?
    var fitW = minH * ($('canvas').width() / $('canvas').height());
    var fitH = minW * ($('canvas').height() / $('canvas').width());
    
    if (fitW > minW){ $('canvas').attr('width', fitW); }
    else { $('canvas').attr('width', minW); }
    
    if (fitH > minH){ $('canvas').attr('height', fitH); }
    else { $('canvas').attr('height', minH); }
    
    cw = fitW;
    ch = fitH;
		
		Repaint();
		
		inputReady = true;
	}
}
*/

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
				){ selected = [j,i]; }
				
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
		if (config.words[i].start !== undefined && config.words[i].dir !== undefined){
			var dir = "Across"; if (config.words[i].dir === 1){ dir = "Down"; }
			if (clueHistory.indexOf(config.words[i].start[0] + "," + config.words[i].start[1]) === -1){
				var marginX = 4;
				var marginY = 14;
				
				if (clueNo > 9){ marginX = 2; marginY = 12; }
				
				ctx.font = 14 + "px Arial";
				ctx.fillText(clueNo, config.paddingLeft + (config.words[i].start[0]*config.boxWidth) + marginX, config.paddingTop + (config.words[i].start[1]*config.boxHeight) + marginY);
				ctx.font = config.fontSize + "px Arial";
					
				clueHistory.push(config.words[i].start[0] + "," + config.words[i].start[1]);				
				
				if (refreshClues){
					$('#Clues' + dir).append('<div class="clue" clue-id="' + clueNo + '">'+ clueNo + ". " + config.words[i].clue +'</div>');
				}
				
				clueNo++;
			} else {
				if (refreshClues){
					var cNo = clueHistory.indexOf(config.words[i].start[0] + "," + config.words[i].start[1]) + 1;
					$('#Clues' + dir).prepend('<div class="clue" clue-id="' + cNo + '">'+ cNo + ". " + config.words[i].clue +'</div>');
				}
			}
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