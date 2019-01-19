'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(function (req, res, next) {
	console.log(`${req.method} ${req.path}\n`, {
		ip: req.ip,
		query: req.query,
		headers: req.headers,
		body: req.body
	}, "\n");
	
	next();
});

app.all('*', function(req, res) {

	res.send('hello\n');
});



app.listen(PORT, function(err) {
	if (err) {
		console.log("Error!", err);
	}

	console.log("Waiting on port "+PORT);
});
