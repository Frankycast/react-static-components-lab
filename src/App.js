import React, { Component } from 'react';
import Mouse from './MouseComponent';
import {GraceHopperQuoteComponent} from'./GraceHopperQuoteComponent'
import CatComponent from './CatComponent';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent/>
				< GraceHopperQuoteComponent />
				<Mouse/>
			</div>
		);
	}
}

export default App;
