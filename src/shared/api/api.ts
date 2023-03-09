import axios from 'axios';
import { LOCAL_STORAGE } from 'shared/const/LOCAL_STORAGE';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(LOCAL_STORAGE.user),
    },
});
