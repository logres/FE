import React from 'react';
import PropTypes from 'prop-types';
import { Descriptions, Button } from 'antd';

const NftDetails = ({ nft, onBuy }) => {
  return (
    <div>
      <Descriptions title="NFT Details" bordered>
        <Descriptions.Item label="Name">{nft.name}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {nft.description}
        </Descriptions.Item>
        <Descriptions.Item label="Image">
          <img alt={nft.name} src={nft.image} style={{ maxWidth: '100%' }} />
        </Descriptions.Item>
        <Descriptions.Item label="Price">{nft.price} ETH</Descriptions.Item>
      </Descriptions>
      <div style={{ marginTop: '10px' }}>
        <Button type="primary" onClick={() => onBuy(nft.id)}>
          Buy
        </Button>
      </div>
    </div>
  );
};

NftDetails.propTypes = {
  nft: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onBuy: PropTypes.func.isRequired,
};

export default NftDetails;
