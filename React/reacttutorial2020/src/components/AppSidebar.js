import React from "react";

function AppSidebar() {
	return (
		<aside>
			{ generateSidebarContent() }
		</aside>
	)
}

const generateSidebarContent = () => (
	<h2>Sidebar</h2>
);

export default AppSidebar;