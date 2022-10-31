// TODO: use this store variable to create a store.
import { legacy_createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import {authReducer} from './auth/auth.reducer';
import {cartReducer} from './cart/cart.reducer';
import {productReducer} from './product/product.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer, 
  product: productReducer, 
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Note: use cart, product and auth as keys
export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
