import Header from './Header';
import React from 'react';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';


const pushState = (obj,url) => 
window.history.pushState(obj, '', url);



const onPopState = handler => {
window.onpopstate = handler;
};

//component as a constant. top level is usually app component
//components are resuable by passing different properties
//only create classes when state or lifecycle of components is required
class App extends React.Component {

	static propTypes = {
		initialData: React.PropTypes.object.isRequired
	}

	state=this.props.initialData;

	componentDidMount(){
		onPopState((event) => {
			this.setState({
				currentContestId: (event.state || {}).currentContestId
			});
		});
		
	}

	componentWillUnmount(){
		onPopState(null);
	}

	fetchContest = (contestId) => {
		pushState(
			{ currentContestId: contestId },
			`/contest/${contestId}`
			);

		api.fetchContest(contestId).then(contest => {
			this.setState({
			currentContestId: contest.id,
			contests: {
				...this.state.contests,
				[contest.id]: contest
			}


		});

		});

		//this.state.contests[contestId]
		
	};//end of fetch contest


	fetchContestList = () => {
		pushState(
			{ currentContestId: null },
			'/'
			);

		api.fetchContestList().then(contests => {
			this.setState({
			currentContestId: null,
			contests


		});

		});

		//this.state.contests[contestId]
		
	};


	currentContest() {
		if(this.state.currentContestId){
			return this.state.contests[this.state.currentContestId];
		}
	}


	pageHeader(){
		if(this.state.currentContestId)
		{
			return this.currentContest().contestName;
		}

		return 'Naming Contests';
	}

   currentContent() {
   	if (this.state.currentContestId) {
   		return <Contest contestListClick={this.fetchContestList}
   		{... this.currentContest()} />;
   	}

    return	<ContestList 
		onContestClick={this.fetchContest}
		contests={this.state.contests} />;
   }

	render(){
	return(
		<div className="App">
		<Header message={this.pageHeader()} />
		{this.currentContent()}
		</div>
		);
}
}




export default App;


