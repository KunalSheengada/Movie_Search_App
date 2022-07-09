import React from 'react';

const MovieHeading = (props) => {
	return (
		<div className='col col-sm-6 col-md-8'>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default MovieHeading;