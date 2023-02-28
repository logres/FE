import { SET_USERNAME, SET_USER_NFTS } from '../constants/actionTypes';

// Action creator to set username
export const setUsername = (username) => (dispatch) => {
  dispatch({ type: SET_USERNAME, payload: username });
};

export const getUserNfts = (address) => async (dispatch) => {
  try {
    const response = await fetch(`https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=20`);
    const data = await response.json();

    dispatch({ type: SET_USER_NFTS, payload: data.assets });
  } catch (error) {
    console.error(error);
  }
}