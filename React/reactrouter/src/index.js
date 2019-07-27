import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';


// COMP
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostsItem from './components/posts/post_item';


const App = () => {
	return (
		<BrowserRouter>
			<div>
				<header>
					Header <br/>
					<NavLink to="/">Home</NavLink> <br/>
					<NavLink to='/posts' activeClassName="sel" activeStyle={{color: '#0099ff'}}>Posts</NavLink> <br/>
					<Link to={{
						pathname:'/profile',
					}}>Profile</Link> <br/>
				</header>
				<Switch>
					<Route path='/posts/:id/:username' component={PostsItem}/>
					<Route path='/profile' component={Profile}/>
					<Route path='/' component={Home}/>
					<Route path='/posts' exact component={Posts}/>
				</Switch>
			</div>
		</BrowserRouter>
	)
}

ReactDOM.render (
	<App/>,
	document.querySelector("#root")
)