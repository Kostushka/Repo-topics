import axios from 'axios';

const SET_REPO = 'SET_REPO';

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

        default:
            return state;
    }
};
export default repoReducer;

export const setRepo = (repo) => ({
    type: SET_REPO,
    payload: repo,
});

export const getRepo =
    (searchQuery = 'is:featured') =>
    async (dispatch) => {
        const res = await axios.get(
            `https://api.github.com/search/topics?q=${searchQuery}`
        );
        dispatch(setRepo(res.data.items));
    };
