import {applyMiddleware, createStore} from 'redux';
import rootReducer from './../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
}

export default configureStore;

// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from '../reducers/root_reducer';
// import logger from 'redux-logger';
// import thunk from '../middleware/thunk';

// const configureStore = () => createStore(rootReducer, applyMiddleware(thunk, logger));

// export default configureStore;