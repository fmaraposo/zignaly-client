import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [logger, thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
)

export default store;