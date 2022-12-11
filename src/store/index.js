// import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { conversationsReducer } from "./conversations";
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { getPublicApi, searchGistsByNameApi } from "../api/gists";

import {
  createConversationApi,
  getConversationsApi,
  removeConversationApi,
} from "../api/conversations";
import { getMessagesApi, createMessageApi } from "../api/messages";

import { messagesReducer } from "./messages";
import { 
  botMessage,
  logger,
  // timeScheduler
} from "./middlewares/";
import { profileReducer } from "./profile";
import { gistsReducer } from "./gists";

// const api = { getPublicApi, searchGistsByNameApi };

const api = {
  getPublicApi,
  searchGistsByNameApi,
  createConversationApi,
  getConversationsApi,
  removeConversationApi,
  getMessagesApi,
  createMessageApi,
};

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
    messages: messagesReducer,
    gists: gistsReducer
  })
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(
    logger,
    // timeScheduler,
    botMessage,
    thunk.withExtraArgument(api)
    )));

export const persistor = persistStore(store);

// export const store = createStore(combineReducers({ profile: profileReducer }));


// export const store = configureStore({ reducer: profileReducer })
