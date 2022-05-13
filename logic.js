class	Logic {

	constructor(){


		this.Arr = []
	}
	logic() {
		var level = 7
		var count=0
		function random(x){
			return Math.floor(Math.random() * x);
		}
		while (true){
			let x,y,i,op=1;
			if (this.Arr.length >=9){
				break
			}
			x=random(3);
			y=random(3);
			op=this.check(x,y);
			if (op==1){

				x=[x,y]
				this.Arr.push(x)
			}

		}
	}
	check (x,y) {
		for (let i = 0, len = this.Arr.length; i < len; i++) {
			let a = this.Arr[i][0]
			let b = this.Arr[i][1]
			if (x==a && y==b){
				return -1;
			}

		}
		return 1;

	}

}

//var x= new Logic()
//x.logic()
//console.log(x.Arr)
