import React from "react"

export const TodoCounter = ({ todo }) => {
	
	const completedTodos = todo.filter((todo) => todo.completed === true);

	return (
		<div className='Title'>
			<h1 className='Title__text'>Your tasks</h1>
			<h4 className='Title__subtitle'>
				Completed {completedTodos.length} to {todo.length}
			</h4>
		</div>
	);
};
