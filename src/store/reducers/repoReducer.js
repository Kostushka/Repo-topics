import axios from 'axios';

const SET_REPO = 'SET_REPO';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

const initialState = {
    items: [],
    isFetching: false,
    count: 0,
};

const repoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPO:
            return {
                ...state,
                items: action.payload,
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
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

export const getRepo =
    (searchQuery = 'is:featured') =>
    async (dispatch) => {
        if (searchQuery === '') {
            searchQuery = 'is:featured';
        }
        dispatch(setFetching(true));
        const res = await axios.get(
            `https://api.github.com/search/topics?q=${searchQuery}`
        );
        dispatch(setRepo(res.data.items));
        dispatch(setFetching(false));
    };
