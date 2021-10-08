import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { auth } from './reducers/auth';

const ConfigureStore = () => createStore(combineReducers({ auth }), applyMiddleware(thunk));

export default ConfigureStore;