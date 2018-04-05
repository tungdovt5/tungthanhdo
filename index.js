
function tamgiac() {
    for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= i; j++){
        console.log('*');
    }
    console.log('&nbsp');
}
}
tamgiac();

function bailam() {
    for (let i = 10; i < i.length; i++) {
       console.log ('i');  
    }
}
bailam();


function demo(){
	let n = 10;
	for (let i = 1; i <= n*2-1; i++) {
		if (i <= n) {
			for (let j = 1; j < n; j++) {
				if (j <= n-i) {
					console.log('0');
				}else{
					console.log('1');
				}
			};
		}else{
			for (let j = 1; j < n; j++) {
				if (j <= i-n) {
					console.log('0');
				}else{
					console.log('1');
				}
			};
		}
		console.log('<br>');
	};
}
demo();

function Person(){
    console.log(this.age = 0)
  
    setInterval(() => {
     console.log(this.age++ ,this.age<=10)
    }, 1000);
    return('false');
  }
  
  var p = new Person();

  var Foo = () => {};
  console.log(Foo.prototype);
  