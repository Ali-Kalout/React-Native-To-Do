import * as actionTypes from './../actionTypes';

export const task = (state = {
    tasks: [],
    loading: true,
    error: ''
}, action: any) => {
    switch (action.type) {
        case actionTypes.DEL_TASK:
            return {
                ...state,
                tasks: state?.tasks?.filter((task: any) => task._id !== action.payload?.id),
                loading: false,
                error: ''
            };

        case actionTypes.TOGGLE_TASK:
            return {
                ...state,
                tasks: state?.tasks?.map((task: any) => (task?._id === action?.payload?._id ? action?.payload : task))
            };

        case actionTypes.GET_TASKS:
            return { ...state, tasks: action.payload, loading: false, error: '' };

        case actionTypes.ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload], loading: false, error: '' };

        default:
            return state;
    }
};