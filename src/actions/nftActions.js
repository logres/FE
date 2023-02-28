import { FETCH_NFTS, SET_NFT_DETAILS, SET_USER_NFTS } from '../constants/actionTypes';

// Action creator to fetch all nfts
export const fetchNfts = () => async (dispatch) => {
  try {
    const response = await fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20');
    const data = await response.json();

    dispatch({ type: FETCH_NFTS, payload: data.assets });
  } catch (error) {
    console.error(error);
  }
};

// Action creator to set nft details
export const setNftDetails = (nft) => (dispatch) => {
  dispatch({ type: SET_NFT_DETAILS, payload: nft });
};

// Action creator to get user nfts
export const getUserNfts = (address) => async (dispatch) => {
  try {
    const response = await fetch(`https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=20`);
    const data = await response.json();

    dispatch({ type: SET_USER_NFTS, payload: data.assets });
  } catch (error) {
    console.error(error);
  }
};
