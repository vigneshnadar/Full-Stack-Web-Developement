import Header from './Header';
import React from 'react';
import ContestList from './ContestList';
import Contest from './Contest';


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

		//this.state.contests[contestId]
		this.setState({
			pageHeader: this.state.contests[contestId].contestName,
			currentContestId: contestId
		});
	};


   currentContent() {
   	if (this.state.currentContestId) {
   		return <Contest {...this.state.contests[this.state.currentContestId]} />;
   	}

    return	<ContestList 
		onContestClick={this.fetchContest}
		contests={this.state.contests} />;
   }

	render(){
	return(
		<div className="App">
		<Header message={this.state.pageHeader} />
		{this.currentContent()}
		</div>
		);
}
}




export default App;


