import { combineReducers } from 'redux';

import signUpReducer from './signUpReducer';

const reducers = combineReducers({ signUp: signUpReducer });

export default reducers;

export type State = ReturnType<typeof reducers>;
