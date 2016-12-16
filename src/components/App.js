import Header from './Header';
import React from 'react';
import axios from 'axios';
import ContestPreview from './ContestPreview';



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

	render(){
	return(
		<div className="App">
		<Header message={this.state.pageHeader}/>
		<div>
		{this.state.contests.map(contest =>
			<ContestPreview key={contest.id} {...contest} />
			)}
		
		</div>
		</div>
		);
};
};




export default App;


