import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const TodoSearch = ({ setSearchTodo }) => {

	const [{ search }, handleInputChange] = useForm({ search: '' });

	useEffect(() => {
		setSearchTodo(search);
	}, [search, setSearchTodo]);

	return (
		<div className='search'>
			<div className='search--group'>
				<input
					type='text'
					className='form__input form__input--search'
					name='search'
					placeholder='search...'
					value={search}
					autoComplete='off'
					onChange={handleInputChange}
				/>
				<i className='search--icon fas fa-search'></i>
			</div>
		</div>
	);
};
