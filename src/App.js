import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import MyNfts from './pages/MyNfts';
import CreateNftPage from './pages/CreateNftPage';
import MarketPage from './pages/MarketPage';

function App() {


  // Header Related
  const [userInfo, setUserinfo] = useState({address: "0x", avatar: ""});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (values) => {
    setUserinfo({
      address: values.address,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    });
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setUserinfo(null);
    setIsLoggedIn(false);
  }

  // MyNfts Related


  return (
      <Router>
        <Header isLoggedIn={isLoggedIn}  userInfo={userInfo} handleLogin = {handleLogin} handleLogout={handleLogout}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/my-nfts" element={<MyNfts isLoggedIn={isLoggedIn}  address={userInfo.address}/>} />
          <Route exact path="/create-nft" element={<CreateNftPage/>} />
          <Route exact path="/market" element={<MarketPage />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
