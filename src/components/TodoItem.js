import React from 'react'

export const TodoItem = ({ id, text, completed, handleToggle, handleDelete }) => {
	return (
		<li className={`item ${completed && 'item--completed'}`} onClick={() => handleToggle(id)}>
			<span className='checkmark--container'>
				<span className={`checkmark ${completed && 'checkmark--completed '}`}>
					<i className={`fas fa-check check ${completed ? 'completed' : 'process'}`}></i>
				</span>
			</span>
			<p className={`item__text ${completed && 'item__text--completed'}`}>{text}</p>
			<i
				className={`fas fa-times item__delete ${completed && 'item__delete--completed'}`}
				onClick={() => handleDelete(id)}
			></i>
		</li>
	);
};

