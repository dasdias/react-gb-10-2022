// import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers({ profile: profileReducer }), composeEnhancers(applyMiddleware()));

// export const store = createStore(combineReducers({ profile: profileReducer }));


// export const store = configureStore({ reducer: profileReducer })
