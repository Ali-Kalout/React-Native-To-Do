import * as actionTypes from './../actionTypes';

export const auth = (state = {
    isAuthenticated: false,
    loading: false,
    token: '',
    user: null,
    error: ''
}, action: any) => {
    switch (action.type) {
        case actionTypes?.START_AUTH:
            return { ...state, loading: true };

        case actionTypes?.AUTH_SUCCESS:
            return { ...state, isAuthenticated: true, loading: false, token: action.payload, error: '' };

        case actionTypes?.GET_USER:
            return { ...state, user: action.payload, isAuthenticated: true, loading: false, error: '' };

        case actionTypes?.AUTH_FAIL:
            return { ...state, isAuthenticated: false, loading: false, error: action.payload };

        case actionTypes?.LOGOUT:
            return { ...state, isAuthenticated: false, loading: false, error: '' };

        case actionTypes?.EDIT_USER:
            return { ...state, user: action.payload, isAuthenticated: true, loading: false, error: '' };

        default:
            return state;
    }
}