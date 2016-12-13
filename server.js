import config from './config';

import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
const server=express();

server.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	destination: path.join(__dirname, 'public')
}));

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