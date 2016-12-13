import config from './config';

import express from 'express';
const server=express();

console.log('expressdc');

server.set('viewengine','ejs');

server.get('/',(req,res) => {
//res.send('Hello World Bask Kya');
res.render('index.ejs', {
	content: '...'
});
});


server.use(express.static('public'));

// server.get('/about.html',(req,res) => {
// res.send('The About Page');
// });

server.listen(config.port,() => {
	console.log('express is listening on port: ',config.port);
});