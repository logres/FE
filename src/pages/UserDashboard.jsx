import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { List } from 'antd';
import { getUserNfts } from '../actions/userActions';
import NftCard from '../components/NftCard';

const UserDashBoard = ({ userId }) => {
  const dispatch = useDispatch();
  const userNfts = useSelector(state => state.user.nfts);

  useEffect(() => {
    dispatch(getUserNfts(userId));
  }, [dispatch, userId]);

  return (
    <div>
      <h1>My NFTs</h1>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={userNfts}
        renderItem={nft => (
          <List.Item>
            <NftCard nft={nft} />
          </List.Item>
        )}
      />
    </div>
  );
};

UserDashBoard.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserDashBoard;
