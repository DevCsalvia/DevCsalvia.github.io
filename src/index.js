import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ScrollToTop from './shared/ScrolledToTop';

import './index.css';
import App from './App';
import likesReducer from './store/reducers/like';
import productsReducer from './store/reducers/product';
import cartReducer from './store/reducers/cart';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';
import { watchProducts, watchCart, watchOrder, watchAuth } from './store/sagas/rootSaga';
//import reportWebVitals from './reportWebVitals';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

/* List of our Reducers */
const rootReducer = combineReducers({
  like: likesReducer,
  product: productsReducer,
  cart: cartReducer,
  order: orderReducer,
  auth: authReducer
});

/* MiddleWare What will be used */
const sagaMiddleware = createSagaMiddleware();

/* Store with list of reducers and middleWares */
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

/* Run Saga MiddleWare to watch after all actions related to Likes */
sagaMiddleware.run(watchProducts);
sagaMiddleware.run(watchCart);
sagaMiddleware.run(watchOrder);
sagaMiddleware.run(watchAuth);

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

// to use React-Router-Dom we should wrapp <App /> component with <BrowserRouter>
ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
