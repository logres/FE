import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNfts } from '../actions/nftActions';
import { setUsername } from '../actions/userActions';
import NftCard from '../components/NftCard';

const Home = () => {
  const dispatch = useDispatch();

  // 从Redux状态中获取nfts和username
  const nfts = useSelector((state) => state.nft.nfts);
  const username = useSelector((state) => state.user.username);

  // 使用useState和useEffect获取和更新本地状态
  const [searchTerm, setSearchTerm] = useState('');
  // useEffect(() => {
  //   dispatch(fetchNfts());
  // }, []);

  // 处理搜索框内容变化的回调函数
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // 处理更新用户名的回调函数
  const handleUpdateUsername = () => {
    const newUsername = prompt('请输入新的用户名');
    if (newUsername) {
      dispatch(setUsername(newUsername));
    }
  };

  return (
    <div>
      <h1>欢迎来到NFT交易网站！</h1>
      <p>当前用户名：{username}</p>
      <button onClick={handleUpdateUsername}>修改用户名</button>
      <input type="text" placeholder="搜索NFT" value={searchTerm} onChange={handleSearch} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {nfts
          .filter((nft) => nft.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((nft) => (
            <NftCard key={nft.id} nft={nft} />
          ))}
      </div>
    </div>
  );
};

export default Home;
