import React, { Fragment } from 'react';
import './App.css';

import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";
import AppFooter from "./components/AppFooter";

function App() {
  return (
		<Fragment>
			<AppSidebar/>
			<AppHeader/>
			<main>
				{ generateMainContent() }
			</main>
			<AppFooter/>
		</Fragment>
	)
}

const generateMainContent = () => (
	<h1>Hello World</h1>
);

export default App;
