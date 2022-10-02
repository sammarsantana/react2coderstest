import React from 'react';

function PageSelector(props) {
	return (
		<div className="col-12 mb-5">
			<div className="row justify-content-center">
				<div className='col-3 col-md-2 text-center'>
					<span>Select Page: </span>
					<input
						className='form-control'
						type='number'
						value={props.value}
						onChange={(event) => props.setPageValue(event.target.value)}
						min='1'
						defaultValue='1'
					></input>
				</div>
			</div>
		</div>
	);
};

export default PageSelector;