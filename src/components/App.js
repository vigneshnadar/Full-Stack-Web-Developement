import Header from './Header';
import React from 'react';
import ContestList from './ContestList';


const pushState = (obj,url) => 
window.history.pushState(obj, '', url);


//component as a constant. top level is usually app component
//components are resuable by passing different properties
//only create classes when state or lifecycle of components is required
class App extends React.Component {
	state={
		pageHeader: 'Naming Contests',
		contests: this.props.initialContests
	};

	componentDidMount(){

		
	}

	fetchContest = (contestId) => {
		pushState(
			{ currentContestId: contestId },
			`/contest/${contestId}`
			);
	};

	render(){
	return(
		<div className="App">
		<Header message={this.state.pageHeader}/>
		<ContestList 
		onContestClick={this.fetchContest}
		contests={this.state.contests} />
		</div>
		);
};
};




export default App;


