// ./store/reducers/userReducer.js

const initialState = {
    username: '',
    walletAddress: '',
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERNAME':
        return {
          ...state,
          username: action.payload,
        };
      case 'SET_WALLET_ADDRESS':
        return {
          ...state,
          walletAddress: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  