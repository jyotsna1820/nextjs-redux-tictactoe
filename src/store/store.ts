import { ReactReduxContext } from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {MakeStore, createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import thunk from "redux-thunk";

const makeStore: MakeStore<rootState> = (context: Context) => createStore(rootReducer, applyMiddleware(thunk));

export const wrapper = createWrapper<rootState>(makeStore, {debug: true});