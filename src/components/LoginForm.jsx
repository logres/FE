import { useState } from 'react';
import { Form, Input, Button, message, Alert } from 'antd';

const LoginForm = ({ onLogin, onRegister }) => {
    const [showRegister, setShowRegister] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const toggleForm = () => {
        setShowRegister(!showRegister);
    };

    const onFinishLogin = (values) => {
        onLogin(values);
    };

    const onFinishRegister = (values) => {
        onRegister(values)
            .then(() => {
                setShowAlert(true);
                setAlertMessage('Registration successful!');
            })
            .catch((error) => {
                setShowAlert(true);
                setAlertMessage(error.message);
            });
    };

    return (
        <>
            {showAlert && (
                <Alert
                    message={alertMessage}
                    type={alertMessage === 'Registration successful!' ? 'success' : 'error'}
                    showIcon
                    closable
                    onClose={() => setShowAlert(false)}
                />
            )}
            {showRegister ? (
                <Form name="register" initialValues={{ remember: true }} onFinish={onFinishRegister} style={{ maxWidth: 400 }}>
                    <h2>Register</h2>
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                        <Button onClick={toggleForm} style={{ marginLeft: 10 }}>
                            Back to Login
                        </Button>
                    </Form.Item>
                </Form>
            ) : (
                <Form name="login" initialValues={{ remember: true }} onFinish={onFinishLogin} style={{ maxWidth: 400 }}>
                    <h2>Login</h2>
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                        <Button onClick={toggleForm} style={{ marginLeft: 10 }}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            )}
        </>
    );
};

export default LoginForm;
