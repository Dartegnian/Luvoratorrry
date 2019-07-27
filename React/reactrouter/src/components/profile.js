import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {

	console.log(props);

	return (
		<div>
			<h1>Profile</h1>

			<Link to={{
				pathname:`${props.match.url}/posts`,
			}}>asss</Link>
		</div>
	)
}

export default Profile;