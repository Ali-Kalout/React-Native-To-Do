import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { auth } from './reducers/auth';
import { task } from './reducers/task';

let mainReducer: any;

const ConfigureStore = () => {
    mainReducer = combineReducers({ auth: auth, tasks: task });
    const store = createStore(mainReducer, applyMiddleware(thunk));
    return store;
}

export type RootState = ReturnType<typeof mainReducer>;
export default ConfigureStore;