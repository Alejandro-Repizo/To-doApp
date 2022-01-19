/**
    
    [
     {
        id: new Date().getTime(),
        text: "Cortar cebolla",
        completed: true || false,
     }
    ]
 
 */

import { types } from '../types/types';

const initialState = [];

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD:
			return [...state, action.payload];

		case types.DELETE:
			return state.filter((todo) => todo.id !== action.payload);

        case types.TOGGLE:
			return state.map((todo) =>
				todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        

		default:
			return state;
	}
};
