import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import NftDetails from './pages/NftDetails';
import UserDashboard from './pages/UserDashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/nft/:id" element={<NftDetails/>} />
          <Route exact path="/user/dashboard" element={<UserDashboard/>} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
