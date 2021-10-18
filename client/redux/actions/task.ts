import * as actionTypes from './../actionTypes';
import * as api from './../../api/index';

export const getTasks = () => async (dispatch: any) => {
    try {
        const { data }: any = await api.getTasks();

        dispatch({
            type: actionTypes?.GET_TASKS,
            payload: data?.tasks
        });
    } catch (error) {
        console.log(error);
    }
}

export const addTask = (task: any) => async (dispatch: any) => {
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

export const delTask = (id: any) => async (dispatch: any) => {
    try {
        const { data } = await api.delTask(id);

        dispatch({
            type: actionTypes?.DEL_TASK,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}

export const toggleTask = (id: any) => async (dispatch: any) => {
    try {
        const { data }: any = await api.toggleTask(id);

        dispatch({
            type: actionTypes?.TOGGLE_TASK,
            payload: data?.task
        });
    } catch (error) {
        console.log(error);
    }
}