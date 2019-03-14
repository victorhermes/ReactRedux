import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';

const middlewares = [];

const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createAppropriateStore(reducers, compose(applyMiddleware(...middlewares)));

export default store;
