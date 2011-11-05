function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}



function move(a, b, c, n){
	sleep(500);
	if (n == 1)
		self.postMessage("Lege die oberste Scheibe von " + 
		   "Turm " + a + " auf Turm " + c + ".");
	else {
            move(a, c, b, n-1);
            move(a, b, c, 1);
            move(b, a, c, n-1);
	}
}

self.onmessage = function(event) {

	move('a', 'b', 'c', event.data);
	self.postMessage("Fertig!");
	self.close();
};