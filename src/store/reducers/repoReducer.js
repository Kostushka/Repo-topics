import axios from 'axios';

const SET_REPO = 'SET_REPO';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const IS_FETCH_ERROR = 'IS_FETCH_ERROR';

const initialState = {
    items: [],
    isFetching: false,
    currentPage: 1,
    perPage: 5,
    totalCount: 0,
    isFetchError: false,
};

const repoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPO:
            return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.total_count,
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case IS_FETCH_ERROR:
            return {
                ...state,
                isFetchError: action.payload,
            };

        default:
            return state;
    }
};
export default repoReducer;

export const setRepo = (repo) => ({
    type: SET_REPO,
    payload: repo,
});
export const setFetching = (bool) => ({
    type: SET_IS_FETCHING,
    payload: bool,
});
export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page,
});
export const setFetchError = (bool) => ({
    type: IS_FETCH_ERROR,
    payload: bool,
});

export const getRepo =
    (searchQuery = 'is:featured', perPage, currentPage) =>
    async (dispatch) => {
        try {
            if (searchQuery === '') {
                searchQuery = 'is:featured';
            }
            dispatch(setFetching(true));
            const res = await axios.get(
                `https://api.github.com/search/topics?q=${searchQuery}&per_page=${perPage}&page=${currentPage}`
            );
            dispatch(setRepo(res.data));
            dispatch(setFetching(false));
        } catch (error) {
            dispatch(setFetchError(true));
            dispatch(setFetching(false));
        }
    };
