import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

// import * as actions from './store/actions';

const composeEnhancers = (typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION__) ? window.__REDUX_DEVTOOLS_EXTENSION__() : null;

const enhancer = compose(applyMiddleware(thunkMiddleware), composeEnhancers);
const store = createStore(reducers, enhancer);

export default store;
