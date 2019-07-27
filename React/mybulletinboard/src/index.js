import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';


// COMP
import Home from './components/home';
import Posts from './components/posts';
import Profiles from './components/profiles';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Route path='/posts' component={Posts}/>
				<Route path='/profiles' component={Profiles}/>
			</div>
		</BrowserRouter>
	)
}

ReactDOM.render (
	<App/>,
	document.querySelector("#root")
)