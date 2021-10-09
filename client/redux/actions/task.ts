import * as actionTypes from './../actionTypes';
import * as api from './../../api/index';

export const getTasks = () => async (dispatch: any) => {
    try {
        const { data } = await api.getTasks();

        dispatch({
            type: actionTypes?.GET_TASKS,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}

export const addtask = (task: any) => async (dispatch: any) => {
    try {
        const { data } = await api.addTask(task);

        dispatch({
            type: actionTypes?.ADD_TASK,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}