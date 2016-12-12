import React from 'react';
import ReactDOM from 'react-dom';


const Header = ({message} => {
	return(
<h2 className="Header text-center"> {message}</h2>
);
};


//we use ReactApi to do syntax validation
Header.propTypes = {
message: React.PropTypes.string.isRequired
};

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




App.defaultProps = {
headerMessage: 'This is the default value'
};

ReactDOM.render(
<App />,
document.getElementbyId('root')
	);