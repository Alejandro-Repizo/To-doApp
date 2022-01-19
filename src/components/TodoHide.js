import React from 'react'

export const TodoHide = ({ handleHide }) => {
	return (
		<button className='btn btn--hide'>
			<i className='far fa-eye-slash'></i>
			<small className='btn__text' onClick={() => handleHide((hide) => !hide)}>completed tasks</small>
		</button>
	);
};
