import * as actionTypes from './../actionTypes';
import * as api from './../../api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = (form: any, history: any) => async (dispatch: any) => {
    dispatch({ type: actionTypes.START_AUTH });

    try {
        const { data } = await api.login(form);
        await AsyncStorage.setItem('token', data.token);

        dispatch({
            type: actionTypes?.AUTH_SUCCESS,
            payload: data?.token
        });

        history?.push('/home');
    } catch (error: any) {
        console.log(error.response.data);
        dispatch({ type: actionTypes.AUTH_FAIL, payload: error.response.data });
    }
}

export const signup = (form: any, history: any) => async (dispatch: any) => {
    dispatch({ type: actionTypes.START_AUTH });

    try {
        const { data } = await api.signup(form);
        await AsyncStorage.setItem('token', data.token);

        dispatch({
            type: actionTypes?.AUTH_SUCCESS,
            payload: data?.token
        });

        history?.push('/home');
    } catch (error: any) {
        console.log(error.response.data);
        dispatch({ type: actionTypes.AUTH_FAIL, payload: error.response.data });
    }
}

export const getUser = () => async (dispatch: any) => {
    try {
        const { data: { user } } = await api.getUser();

        dispatch({
            type: actionTypes?.GET_USER,
            payload: user
        });
    } catch (error: any) {
        console.log(error);
    }
}