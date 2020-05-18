const playerSpan = document.getElementById('player');
const gameTable= document.getElementById('game');
const game = {
	turn: 'X',
	move: 0
}
function nextturn(){
	game.move++
	if(game.turn==='X')
		game.turn = 'O'
	else
		game.turn = 'X'
	if(game.move === 9){
		alert("Game Over | Draw")
		resetTable()
	}
	player.textContent= game.turn;
}
function checkforrow(row){
	var combo=game.turn+game.turn+game.turn;
	var curcombo='';
	for(var i=0;i<3;i++)
		curcombo+=gameTable.children[0].children[row-1].children[i].textContent
	if(combo === curcombo)
		return 1
	return 0
}
function checkforcol(col){
	var combo=game.turn+game.turn+game.turn
	var curcombo=''
	for(var i=0;i<3;i++)
		curcombo+=gameTable.children[0].children[i].children[col-1].textContent
	if(combo === curcombo)
		return 1
	return 0
}
function checkd1(){
	var combo=game.turn+game.turn+game.turn;
	var curcombo='';
	for(var i=0;i<3;i++)
		curcombo+=gameTable.children[0].children[i].children[i].textContent
	if(combo === curcombo)
		return 1;
	return 0;
	}
function checkd2(){
	var combo=game.turn+game.turn+game.turn
	var curcombo=''
	for(var i=0;i<3;i++)
		curcombo+=gameTable.children[0].children[i].children[2-i].textContent
	if(combo === curcombo)
		return 1;
	return 0;
	}
function checkforwin(row,col){
		if(row+col === 5 || row+col === 3){
			if(checkforrow(row)||checkforcol(col))
				return win()
		}
		else if(row === 2 && col === 2){
			if(checkforrow(row)||checkforcol(col)||checkd1()||checkd2())
				return win()
		}
		else if(row === col){
			if(checkforrow(row)||checkforcol(col)||checkd1())
				return win()
		}
		else
			if(checkforrow(row)||checkforcol(col)||checkd2())
				return win();
		return 0
	}
function win(){
	alert("Game Won by "+game.turn);
	resetTable();
	return 1;
}
function resetTable(){
	var box=Array.from(document.getElementsByTagName('td'))
	for(var i=0;i<9;i++)
			box[i].textContent='';
	game.move=0
	var ran=Math.random()
	if(ran>0.5)
		game.turn='X'
	else
		game.turn='O'
	playerSpan.textContent=game.turn;
	}
function boxclicked(row,col){
	let clickedBox= gameTable.children[0].children[row-1].children[col-1]
	if(clickedBox.textContent !== '')
		return
	clickedBox.textContent= game.turn
	if(!checkforwin(row,col))
		nextturn()
	}
function resetclicked(){
	resetTable()
}