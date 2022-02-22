import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [logger];

const store = createStore(
    reducer, 
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
)

export default store;