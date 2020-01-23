import React from "react";

function AppHeader() {
	return (
		<header>
			Generic Site
			<nav>{ generateHeaderContent() }</nav>
		</header>
	)
}

const navLinks = [
	{
		title: "Home",
		url: "/"
	},
	{
		title: "About",
		url: "/about/"
	},
];

const generateHeaderContent = () => (
	<ul>
		{ navLinks.map(
			(link) => <a href={link.url}>{link.title}</a>
		) }
	</ul>
);

export default AppHeader;
