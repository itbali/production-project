import axios from 'axios';
import { LOCAL_STORAGE } from 'shared/const/LOCAL_STORAGE';

export const $api = axios.create({
    baseURL: __API__,
});

$api.interceptors.request.use((config) => {
    config.headers.authorization = localStorage.getItem(LOCAL_STORAGE.user);
    return config;
});
