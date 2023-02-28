import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';

const { Meta } = Card;

const NftCard = ({ nft, onBuy }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={nft.image} />}
    >
      <Meta title={nft.name} description={nft.description} />
      <div style={{ marginTop: '10px' }}>
        <Button type="primary" onClick={() => onBuy(nft.id)}>Buy</Button>
      </div>
    </Card>
  );
};

NftCard.propTypes = {
  nft: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onBuy: PropTypes.func.isRequired,
};

export default NftCard;
