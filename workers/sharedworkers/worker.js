var clients = [];
var clientId = 0;

self.onconnect = function(event){
	var port = event.ports[0];
	clients[clientId++] = port;

	port.onmessage = function(e) {
		for (client in clients){
			clients[client].postMessage({ sender: e.data.sender, msg: e.data.msg});
		}
	};
};