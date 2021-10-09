import * as actionTypes from './../actionTypes';

export const task = (state = { tasks: [], loading: true }, action: any) => {
    switch (action.type) {
        case actionTypes.GET_TASKS:
            return { ...state, tasks: action.payload, loading: false };

        case actionTypes.ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload], loading: false };

        default:
            return state;
    }
};