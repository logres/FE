
import { Avatar } from 'antd';

const AvatarName = (props) =>{

    const username = props.username;
    return (
        <div>
            <Avatar
                style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}
                size="large"
            >
                {username.slice(0, 1)}
            </Avatar>
            <span style={{ marginLeft: '10px' }}>{username}</span>
        </div>
    )
}

export default AvatarName;