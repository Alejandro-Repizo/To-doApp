import React from 'react'
import { useForm } from '../hooks/useForm';



export const TodoCreate = ({ handleCreated }) => {
	const [{ task }, handleInputChange, reset] = useForm({ task: '' });

	const handleSubmit = (e) => {
		e.preventDefault();
		if (task) {
			handleCreated({
				id: new Date().getTime(),
				text: task,
				completed: false,
			});
		}
		reset();
	};

	return (
		<div className='card'>
			<h2 className='card__title'>Create a new task</h2>
			<form className='form' onSubmit={handleSubmit}>
				<div className='form-group'>
					<label className='form__label'>Task name</label>
					<input
						className='form__input'
						type='text'
						placeholder='Launch rocket to the moon'
						name='task'
						value={task}
						onChange={handleInputChange}
						autoComplete='off'
					/>
				</div>
				<button className='btn btn--create'>
					<small className='btn__text'>create tasks</small>
				</button>
			</form>
			<figure className='figure'>
				<img
					src='/assets/Checklist-bro.svg'
					alt='Checklist-bro.svg'
					className='figure__img'
				/>
			</figure>
		</div>
	);
};
