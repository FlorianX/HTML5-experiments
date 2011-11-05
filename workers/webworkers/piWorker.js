self.onmessage = function(event) {
	var a,b;
	a = new Number(2 * Math.sqrt(3));
	b = new Number(3);
	while(a != b){
        a = 2 * a * b / (a + b);
        b = Math.sqrt(a * b);
	}

	self.postMessage(a);
	self.close();
};