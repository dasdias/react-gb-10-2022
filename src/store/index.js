// import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { conversationsReducer } from "./conversations";
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { messagesReducer } from "./messages";
import { 
  botMessage,
  // logger,
  // timeScheduler
} from "./middlewares/";
import { profileReducer } from "./profile";

const persistConfig = {
  key: "gbchat",
  storage,
  whitelist: ["profile"],
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer
  })
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(
    // logger,
    // timeScheduler,
    botMessage,
    thunk
    )));

export const persistor = persistStore(store);

// export const store = createStore(combineReducers({ profile: profileReducer }));


// export const store = configureStore({ reducer: profileReducer })
