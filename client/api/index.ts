import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authForm } from '../screens/Auth';
import Constants from "expo-constants";

const { manifest } = Constants;

const url = (manifest && typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
	? (manifest.debuggerHost && `http://${manifest.debuggerHost.split(':').shift()}:5001`)
	: `http://localhost:5001`;

const API = axios.create({ baseURL: url });
API.interceptors.request.use(async (config) => {
	const token = await AsyncStorage.getItem('token');
	if (config.headers)
		config.headers.Authorization = `Bearer ${token}`;
	return config;
});

export const login = (form: authForm) => API.post('/users/login', form);
export const signup = (form: authForm) => API.post('/users/signup', form);
export const getUser = () => API.get('/users');
export const getTasks = () => API.get('/tasks');
export const addTask = (task: any) => API.post('/tasks', task);
export const delTask = (id: any) => API.delete(`/tasks/${id}`);
export const toggleTask = (id: any) => API.patch(`/tasks/${id}/toggle`);
export const editUser = (form: any) => API.patch('/users', form);