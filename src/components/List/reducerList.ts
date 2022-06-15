/* eslint-disable linebreak-style */
/* eslint-disable no-case-declarations */
/* eslint-disable indent */
/* eslint-disable linebreak-style */

import { useReducer, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { recuderPerson, reducerAction } from '../../types';

export const actions = {
	adicionar: 'adicionar',
	delete: 'delete',
	order: 'order',
};

const initinalNameState: recuderPerson[] = [];

const handleSendName = (state: recuderPerson[], action: reducerAction) => {
	switch (action.type) {
		case actions.adicionar:
			if (action.payload?.name) {
				const newState = [...state];
				newState.push({
					id: uuid(),
					name: action.payload?.name,
					job: action.payload?.job
				});
				return newState;
			}

			break;
		case actions.delete:
			if (action.payload?.job) {
				let newState = [...state];
				newState = newState.filter((item) => item.job !== action.payload?.job);
				return newState;
			}
			break;
		case actions.order:
			let newState = [...state];
			newState = newState.sort((a, b) => a.name > b.name ? 1 : -1);
			return newState;
			break;
	}
	return state;
};

export const useTodoList = () => {
	return useReducer(handleSendName, initinalNameState);
};

