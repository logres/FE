import { Avatar, Popover, Button } from 'antd';

function UserAvatar({ avatar, username, address, onLogOut }) {
    const content = (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button type="primary" onClick={() => {
                window.open(`https://goerli.etherscan.io/address/${address}`, '_blank');
            }}>
                See Detail in EtherScan
            </Button>
            <Button onClick={onLogOut}>Logout</Button>
        </div>
    );

    return (
        <Popover content={content} trigger="hover">
            <Avatar size={40} src={avatar} />
            <span style={{ color: '#fff' }}>{username}</span>
        </Popover>
    );
}

export default UserAvatar;
