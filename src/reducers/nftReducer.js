// ./store/reducers/nftReducer.js

const initialState = {
    nfts: [],
};

const nftReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NFT':
            return {
                ...state,
                nfts: [...state.nfts, action.payload],
            };
        case 'REMOVE_NFT':
            return {
                ...state,
                nfts: state.nfts.filter((nft) => nft.id !== action.payload),
            };
        default:
            return state;
    }
};

export default nftReducer;
