import { combineReducers } from 'redux';
import repoReducer from './repoReducer';

export const rootReducer = combineReducers({
    repo: repoReducer,
});
