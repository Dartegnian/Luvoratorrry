import React from "react";

function AppFooter() {
	return(
		<footer>
			{ generateFooterContent() }
		</footer>
	)
}

const generateFooterContent = () => (
	<h3>Hello, footer content</h3>
)

export default AppFooter;