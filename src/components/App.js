import Header from './Header';
import React from 'react';
import ContestPreview from './ContestPreview';


//component as a constant. top level is usually app component
//components are resuable by passing different properties
//only create classes when state or lifecycle of components is required
class App extends React.Component {
	state={
		pageHeader: 'Naming Contests'
	};
	render(){
	return(
		<div className="App">
		<Header message={this.state.pageHeader}/>
		<div>
		Print kar kuc to
		{this.props.contests.map(contest =>
			<ContestPreview {...contest} />
			)}
		
		</div>
		</div>
		);
};
};




export default App;


