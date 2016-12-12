import config from './config';

import express from 'express';
const server=express();

server.get('/',(req,res) => {
res.send('Hello World Bask Kya');
});


server.get('/about.html',(req,res) => {
res.send('The About Page');
});

server.listen(config.port,() => {
	console.log('express is listening on port: ',config.port);
});