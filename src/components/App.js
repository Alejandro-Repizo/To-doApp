import React, { useEffect, useReducer, useState } from 'react';

import { todoReducer } from '../reducer/TodoReducer';
import { types } from '../types/types';

import { TodoSearch } from './TodoSearch';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreate } from './TodoCreate';
import { TodoHide } from './TodoHide';

const init = () => JSON.parse(window.localStorage.getItem('todos')) || [];

export const App = () => {
	const [state, dispatch] = useReducer(todoReducer, [], init);

	const [searchTodo, setSearchTodo] = useState('');

	const [hide, setHide] = useState(false);

	useEffect(() => {
		window.localStorage.setItem('todos',JSON.stringify(state))
	}, [state])

	const filteredTask = () => {
		if (hide) {
			return state.filter((todo) => todo.completed !== true);
		}
		return state.filter((todo) => todo.text.toLowerCase().includes(searchTodo.toLowerCase()));
	};

	const handleCreated = (todo) => {
		dispatch({
			type: types.ADD,
			payload: todo,
		});
	};

	const handleDelete = (id) => {
		dispatch({
			type: types.DELETE,
			payload: id,
		});
	};

	const handleToggle = (id) => {
		dispatch({
			type: types.TOGGLE,
			payload: id,
		});
	};

	return (
		<div className='container'>
			<div className='content'>
				<section>
					<TodoCreate handleCreated={handleCreated} />
				</section>
				<section className='content-s'>
					<TodoCounter todo={state} />
					<TodoSearch setSearchTodo={setSearchTodo} />
					<TodoList>
						{filteredTask().map((todo) => (
							<TodoItem
								key={todo.id}
								{...todo}
								handleToggle={handleToggle}
								handleDelete={handleDelete}
							/>
						))}
					</TodoList>
					<TodoHide handleHide={setHide} />
				</section>
			</div>
		</div>
	);
};
