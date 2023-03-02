import { Layout, Menu, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import UserAvatar from './UserAvatar';
import LoginForm from './LoginForm';
import {useState} from 'react';

const { Header } = Layout;

const AppHeader = ({ isLoggedIn, userInfo, handleLogin, handleLogout, handleRegister }) => {
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Header style={{ display: 'flex' }}>
      <div className="logo" />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ borderBottom: 'none' }}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/my-nfts">My NFTs</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/create-nft">Create NFT</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/market">Marketplace</Link>
          </Menu.Item>
        </Menu>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {isLoggedIn && userInfo ? (
            <UserAvatar avatar={userInfo.avatar} address={userInfo.address} onLogOut={handleLogout} />
          ) : (
            <div>
              <Button type="primary" onClick={() => setVisible(true)}>
                Log in
              </Button>
              <Modal visible={visible} onCancel={handleCancel} footer={null}>
                <LoginForm onLogin={handleLogin} onRegister={handleRegister} />
              </Modal>
            </div>
          )}
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
