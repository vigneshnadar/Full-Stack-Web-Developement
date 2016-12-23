import config from './config';

import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import apiRouter from './api';

const server=express();

server.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public')
}));

server.set('view engine','ejs');

import './serverRender';
import serverRender from './serverRender';


server.get(['/', '/contest/:contestId'],(req,res) => {
//res.send('Hello World Bask Kya');

console.log(req.params.contestId);

	serverRender(req.params.contestId)
	.then(({ initialMarkup, initialData}) => {
		res.render('index', {
				initialMarkup,
				initialData
});
	})
	.catch(console.error);

});

server.use('/api',apiRouter);
server.use(express.static('public'));

// server.get('/about.html',(req,res) => {
// res.send('The About Page');
// });

server.listen(config.port,config.host, () => {
	console.log('express is listening on port: ',config.port);
});