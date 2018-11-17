import types from './types';
import axios from 'axios';

export const BASE_URL = 'http://api.reactprototypes.com/todos';
export const API_KEY = '?key=56565656';

export function getListData(){
    
    const resp = axios.get(BASE_URL + API_KEY)

    return {
        type: types.GET_ALL_LIST_DATA,  
        payload: resp
    }
}