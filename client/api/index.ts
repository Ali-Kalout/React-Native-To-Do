import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authForm } from './../pages/Auth';

const url = 'http://localhost:5000';

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