function demo1(){
	for (var i = 1; i <= 10; i++) {
		for (var j = 1; j <= i; j++) {
			document.write('*');
		};
		document.write('<br>');
	};
};

function demo2(){
	for (var i = 1; i <= 10; i++) {
		for (var j = 10; j >= i; j--) {
			document.write('*');
		};
		document.write('<br>');
	};
}

function demo3(){
c
}
function demo4(){
	var y = 0;
	var n = 10;
	var m= 10;
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= i; j++) {
			document.write('&nbsp');
		}
		y = m*2-1;
		if (y >= 1) {
			for (var x = 1; x <= y; x++) {
				document.write('*');
			};
		};
		m--;
		document.write('<br>');
	};
}

function demo5(){
	var n = 10;
	for (var i = 1; i <= n*2-1; i++) {
		if (i <= n) {
			for (var j = 1; j < n; j++) {
				if (j <= n-i) {
					document.write('0');
				}else{
					document.write('1');
				}
			};
		}else{
			for (var j = 1; j < n; j++) {
				if (j <= i-n) {
					document.write('0');
				}else{
					document.write('1');
				}
			};
		}
		document.write('<br>');
	};
}

function demo(){
	demo1();
	document.write('<br>'+'<br>');
	demo2();
	document.write('<br>'+'<br>');
	demo3();
	document.write('<br>'+'<br>');
	demo4();
	document.write('<br>'+'<br>');
	demo5();
}