import * as actionTypes from './../actionTypes';

export const auth = (state = {
    isAuthenticated: false,
    loading: false,
    token: '',
    user: null
}, action: any) => {
    switch (action.type) {
        case actionTypes?.START_AUTH:
            return { ...state, loading: true };

        case actionTypes?.AUTH_SUCCESS:
            return { ...state, isAuthenticated: true, loading: false };

        case actionTypes?.LOGOUT:
            return { ...state, isAuthenticated: false, loading: false };

        default:
            return state;
    }
}