import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Issues } from './Issues';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            issues: Issues
        }),
        applyMiddleware(logger)
    );

    return store;
}