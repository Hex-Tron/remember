class Box {

	constructor (x,y) {
		this.red=255
		this.green=0
		this.blue=0
		this.x=x
		this.y=y
		this.width=100
		this.reveled=true

	}
	show (a) {

		fill(this.red,this.green,this.blue,a);
		rect(this.x,this.y,this.width, this.width,10)  // 20 for round
		//
	}
	contain(MOUSE_X,MOUSE_Y){
		if (( this.x - 50) < MOUSE_X && MOUSE_X < (this.x + 50) ){
			//console.log('this-x:'+this.x)
			//console.log('this-y:'+this.y)
			if (( this.y - 50) < MOUSE_Y && MOUSE_Y < (this.y + 50) ){
				this.red=0;
				this.green=255;
				this.blue=0;
				return true;


			}

		}
		return false;
	}
}
