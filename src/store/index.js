import { createStore, combineReducers } from 'redux';
import nftReducer from '../reducers/nftReducer';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({
  nft: nftReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
