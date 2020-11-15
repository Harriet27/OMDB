import {
    MOVIE_START,
    MOVIE_SUCCESS,
    MOVIE_FAVORITE,
    MOVIE_FAILED,
} from '../Types';

const INITIAL_STATE = {
    movieList: [],
    favoriteList: [],
    loading: false,
};

export const movieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOVIE_START:
            return {
                ...state,
                loading: true,
            };
        case MOVIE_SUCCESS:
            return {
                ...state,
                movieList: action.payload,
                loading: false,
            };
        case MOVIE_FAVORITE: 
            return {
                ...state,
                favoriteList: action.payload,
                loading: false,
            };
        case MOVIE_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
