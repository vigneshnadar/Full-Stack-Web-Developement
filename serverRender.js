// get the data from the api
import React from 'react';
import ReactDOMServer from 'react-dom/server';


import App from './src/components/App'


import config from './config';
import axios from 'axios';

const getApiUrl = contestId => {
 console.log(contestId);

	if(contestId){
		console.log('inside');
		return `${config.serverUrl}/api/contests/${contestId}`;
	}

	console.log('outside');

	return `${config.serverUrl}/api/contests`;
};


const getInitialData = (contestId,apiData) => {
	console.log(contestId);
	if(contestId){
		console.log('inside data');
		return {
		currentContestId: apiData.id,
		contests: {
			[apiData.id]: apiData
		}
	};
	}
	console.log('outside data');
	return {
		contests: apiData.contests
	};
};

const serverRender = (contestId) =>
	axios.get(getApiUrl(contestId))
	  .then(resp => {
	  	console.log(contestId);
	  	const initialData = getInitialData(contestId, resp.data);
	  	return {
	  		initialMarkup: ReactDOMServer.renderToString(
	  			<App initialData={initialData}/>
	  			),
	  		initialData
		} ;
	});


export default serverRender;


