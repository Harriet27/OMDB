import {
    MOVIE_START,
    MOVIE_SUCCESS,
    MOVIE_FAVORITE,
    MOVIE_FAILED,
} from '../Types';
import Axios from 'axios';
import { JSON_URL } from '../../Support/API';

function stringify (obj) {
    var str = [];
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        return str.join("&");
    };
};

export const searchMovie = (title) => {
    return async dispatch => {
        dispatch({
            type: MOVIE_START,
        });
        try {
            let res = await Axios.get(`${JSON_URL}/movies?${stringify(title)}`);
            dispatch({
                type: MOVIE_SUCCESS,
                payload: res.data,
            });
        } catch {
            dispatch({
                type: MOVIE_FAILED,
            });
        }
    };
};

export const addFavorite = (data) => {
    return async dispatch => {
        dispatch({
            type: MOVIE_START,
        });
        try {
            let res = await Axios.post(`${JSON_URL}/favorites`, data);
            dispatch({
                type: MOVIE_FAVORITE,
                payload: res.data,
            });
        } catch {
            dispatch({
                type: MOVIE_FAILED,
            });
        }
    };
};

export const getFavorite = () => {
    return async dispatch => {
        dispatch({
            type: MOVIE_START,
        });
        try {
            let res = await Axios.get(`${JSON_URL}/favorites`);
            dispatch({
                type: MOVIE_FAVORITE,
                payload: res.data,
            });
        } catch {
            dispatch({
                type: MOVIE_FAILED,
            });
        }
    };
};

export const removeFavorite = (id) => {
    return async dispatch => {
        dispatch({
            type: MOVIE_START,
        });
        try {
            let res = await Axios.delete(`${JSON_URL}/favorites/${id}`);
            dispatch({
                type: MOVIE_FAVORITE,
                payload: res.data,
            });
            console.log('deleted');
        } catch {
            dispatch({
                type: MOVIE_FAILED,
            });
        }
    };
};
