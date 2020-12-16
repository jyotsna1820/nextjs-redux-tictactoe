import { ReactReduxContext } from "react-redux";
import {createStore} from 'redux';
import rootReducer from './reducers';
import {MakeStore, createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

const makeStore: MakeStore<gameState> = (context: Context) => createStore(rootReducer);

export const wrapper = createWrapper<gameState>(makeStore, {debug: true});