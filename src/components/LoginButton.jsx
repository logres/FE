import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const LoginButton = ({ onLogin }) => {
    const [visible, setVisible] = useState(false);

    const toggleModal = () => setVisible(!visible);

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        // TODO: 进行登入逻辑
        toggleModal();
        onLogin(values); // 调用onLogin回调函数，传入当前用户名
    };

    return (
        <>
            <Button onClick={toggleModal} style={{ cursor: 'pointer',background: '#FFD700' }}>
                Login
            </Button>
            <Modal
                title="Login"
                visible={visible}
                onCancel={toggleModal}
                footer={null}
            >
                <Form onFinish={onFinish}>
                    <Form.Item
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your address!',
                            },
                        ]}
                    >
                        <Input placeholder="Address" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default LoginButton;
