import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';
const router= express.Router();

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) =>
{
assert.equal(null,err);

mdb=db;
});


router.get('/contests', (req,res) => {
	let contests = {};
	mdb.collection('contests').find({})
	.each((err, contests) => {
		assert.equal(null,err);
		if(!contest) {
			res.send(contests);
			return ;
		}

		contests[contest.id] = contest;
	});
	//
});




router.get('/names/:nameIds', (req,res) => {
	let names = {};
	mdb.collection('names').find({....})
	.each((err, names) => {
		assert.equal(null,err);
		if(!name) {
			res.send(names);
			return ;
		}

		contests[contest.id] = contest;
	});
	//
});


router.get('/contests/:contestId', (req,res) => {

});


export default router;



