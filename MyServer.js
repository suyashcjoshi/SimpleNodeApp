// Copyright (c) 2019 Oracle and/or its affiliates. All rights reserved.

var http = require("http");
// Read Enviornment Parameters from Oracle Cloud
var port = Number(process.env.PORT || 8080);
var greeting = (process.env.GREETING || "Hello World from Oracle Cloud!");
// Create a simple HTTP Server
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(greeting + "\n");
});
// Server is now listening on the port configured above
server.listen(port);
