import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import contactsReducer from './contacts';
import profileReducer from './application';
import messagesReducer from './messages';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const reducer = combineReducers({
  contacts: contactsReducer,
  profile: profileReducer,
  messages: messagesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
