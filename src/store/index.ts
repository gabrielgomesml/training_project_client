import { combineReducers, createStore, Store } from 'redux';
import { SignUpState } from './signUp/types';

import signUp from './signUp';

export interface ApplicationState {
  signUp: SignUpState;
}

const store: Store<ApplicationState> = createStore(combineReducers({ signUp }));

export default store;
