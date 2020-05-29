import { createStore, Middleware, combineReducers, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { capitalReducer } from './reducer/capitalReducer';
import { countryReducer } from './reducer/countryReducer';
import { RootState } from '../types/types';

const middlewares: Middleware[] = [thunk];

const rootReducer = combineReducers({
    capital: capitalReducer,
    country: countryReducer
});

const store: Store<RootState> = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;