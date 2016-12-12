import Header from './Header';
import React from 'react';


//component as a constant. top level is usually app component
//components are resuable by passing different properties
const App = (props) => {
	return(
		<div className="App">
		<Header message="Naming Contests"/>
		<div>
		.......
		</div>
		</div>
		);
};



export default App;


