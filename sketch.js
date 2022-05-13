function createArray(length) 
{
	var arr = new Array(length || 0),
		i = length;
	if (arguments.length > 1) {
		var args = Array.prototype.slice.call(arguments, 1);
		while(i--) arr[length-1 - i] = createArray.apply(this, args);
	}
	return arr;
}
var start=1;
var cols = 3;
var rows = 3;
var grid,coordinate,check,u1,u2,fade,fadeAmount;
function* yield_keyword (ARRAY) {
	for (let i = 0; i < ARRAY.length; i++) {
		yield ARRAY[i]
	}
}
let coord, arrshowed=[],arrcheck=[];
function setup ()
{
	createCanvas (800, 600);
	noStroke ();
	grid = createArray (cols, rows);
	for (let i = 0; i < cols; i++) {
		for (let j= 0; j < rows ; j++) {
			grid[i][j] = new Box((i+1) * 150, (1+j) * 150)
		}
	}
	let Logics = new Logic() ;
	Logics.logic();
	coordinate = Logics.Arr;
	coord =  yield_keyword(coordinate);
	check = coord.next()['value'];
	u1=check[0];
	u2=check[1];
	arrshowed.push([u1,u2]);
	fade = 0; 
	fadeAmount=15;
	// console.log(coordinate);

}
function draw ()
{
	background (220);
	if (start == 1) 
	{

//		var s = 'Start:' + mouseX +',' +mouseY
//		text(s,400,80);
		rectMode(CENTER);
		fill(235, 204, 52);
		rect(400,300,200,100);
		fill(255);
		textSize(32);
		if (mouseIsPressed === true) {
			if (mouseButton === LEFT) {
				start=0;
			}
		}
	}
	else if( start ==2){

//		var s = 'Start:' + mouseX +',' +mouseY
//		text(s,400,80);
		for (let i = 0; i < cols; i++) {
			for (let j= 0; j < rows ; j++) {
				grid[i][j].show(255);
			}
		}
	}
	else if(start == 0){
		//for (let i = 0, len = coordinate.length; i < len; i++) {
		if (fade>255) {fade=0;
			check = coord.next()['value'];
			if (check == undefined ) {start=2;
				console.log('Original sequence');
				console.log(coordinate);
				return}	
			// console.log(check);
			arrshowed.push([u1,u2]);
			u1=check[0];
			u2=check[1];
		}
		fade+=fadeAmount;
		grid[u1][u2].show(fade);
		for (let i = 0, len = arrshowed.length; i < len; i++) {
			let op1=arrshowed[i][0]
			let op2=arrshowed[i][1]
			grid[op1][op2].show(255);
		}
		//console.log(fade);
	}
	else if (start == 3) {
		text('Wrong',400,80);
	}

}
var offbutton=1;
function reset_failed_squence(){

	for (let i8 = 0, len = arrcheck.length; i8 < len; i8++) {
		if((arrcheck[i8][0]!=coordinate[i8][0]) || (arrcheck[i8][1]!=coordinate[i8][1])) {
				console.log('Wrong sequence')
				start=3;
				offbutton=0;
				break;
			}}
	

	return;
}


function mousePressed() {
	if (start==2){
		for (let i = 0; i < cols; i++) {
			var breaked=0;
			for (let j= 0; j < rows ; j++) {
				if (grid[i][j].contain(mouseX,mouseY)){
					// console.log('i:'+i+',j:'+j)
					// console.log('mouse-X:'+ mouseX + 'mouse-Y:' + mouseY)
					//console.log('121')

					var pushed=0;
					for (let i7 = 0, len = arrcheck.length; i7 < len; i7++) {
						if (arrcheck[i7][0]==i){
							if(arrcheck[i7][1]==j){
								pushed=1;

							}}

					}
					if (pushed==0) {arrcheck.push([i,j]);
					console.log(arrcheck);
					breaked=1;
					break;
					}

				}
			}
			//console.log(arrcheck);
			if (breaked==1) break;

		}
				if (offbutton==1) reset_failed_squence();
	}

}
