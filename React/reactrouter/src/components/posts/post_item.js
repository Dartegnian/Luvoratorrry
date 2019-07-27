import React from 'react';
import { Link } from 'react-router-dom';

const PostsItem = (props) => {
	console.log(props);

	return (
		<div>
			<h1>Big Gay</h1>
			<p>Hello {props.match.params.id}</p>
			<p>I want to fuck 
			{props.match.params.username}</p>
		</div>
	)
}

export default PostsItem;