// import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { conversationsReducer } from "./conversations";
import { messageReducer } from "./messages";
import { profileReducer } from "./profile";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers({ profile: profileReducer, conversations: conversationsReducer, message: messageReducer }), composeEnhancers(applyMiddleware()));

// export const store = createStore(combineReducers({ profile: profileReducer }));


// export const store = configureStore({ reducer: profileReducer })
