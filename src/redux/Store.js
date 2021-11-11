import {createStore, applyMiddleware} from 'react-redux';

import reduxThunk from 'react-thunk';

import rootReducer from './Root-reducers';

const middleware = [reduxThunk]
const store = createStore(rootReducer,applyMiddleware(...middleware)
)


export default store