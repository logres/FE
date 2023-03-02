import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import MyNfts from './pages/MyNfts';
import CreateNftPage from './pages/CreateNftPage';
import MarketPage from './pages/MarketPage';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import axios from 'axios';
import { get_nonce, log_in, register} from './api/api';

function App() {


  // Header Related
  const [userInfo, setUserinfo] = useState({ address: "0x", avatar: "" , username: ""});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (values) => {

    const sign_in = async (address) => {
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask已安装!');
      }

      const nonce = await get_nonce(address);

      const message = address + nonce;
      const msgParamsHash = Web3.utils.keccak256(message);

      // 获取用户签名
      const signature = await window.ethereum.request({
        method: 'eth_sign',
        params: [address, msgParamsHash]
      });

      // 输出签名结果
      console.log('签名结果:', signature);

      const pk = await window.ethereum.request({ 
        method: 'eth_getEncryptionPublicKey',
        params: [address]
      });

      const userData = await log_in(address, pk, signature);
      return userData;
    }
    const userData = sign_in(values.address)
    setUserinfo({
      address: userData.address,
      avatar: userData.avatar,
      username: userData.username
    });
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setUserinfo(null);
    setIsLoggedIn(false);
  }

  const handleRegister = (values) => {
    const data = register(values.username, values.address);
    console.log(data);
  }

  // MyNfts Related


  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} userInfo={userInfo} handleLogin={handleLogin} handleLogout={handleLogout} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/my-nfts" element={<MyNfts isLoggedIn={isLoggedIn} address={userInfo.address} />} />
        <Route exact path="/create-nft" element={<CreateNftPage />} />
        <Route exact path="/market" element={<MarketPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
