import React, { useState } from 'react';
import { Input, Form, Button } from 'antd';

const CreateNftPage = () => {
    const [form] = Form.useForm();
    const [previewUrl, setPreviewUrl] = useState('');

    const handlePreview = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        const fileUrl = URL.createObjectURL(file);
        setPreviewUrl(fileUrl);
    };

    const handleCreate = (values) => {
        // handle create NFT logic here
        // May be need Some API call to Backend
        console.log(values);
        form.resetFields();
        setPreviewUrl('');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Create NFT</h1>
            <Form
                form={form}
                layout="vertical"
                style={{ width: 300 }}
                onFinish={handleCreate}
            >
                <Form.Item
                    label="NFT Image"
                    name="nftImage"
                    rules={[{ required: true, message: 'Please upload an image for your NFT' }]}
                >
                    <div>
                        <input type="file" accept="image/*" onChange={handlePreview} />
                    </div>
                    {previewUrl && <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', marginTop: 10 }} />}
                </Form.Item>
                <Form.Item
                    label="NFT Name"
                    name="nftName"
                    rules={[{ required: true, message: 'Please input the name of your NFT' }]}
                    style={{ width: '100%', margin: '0 auto' }}
                >
                    <Input placeholder="Enter the name of your NFT" />
                </Form.Item>
                <Form.Item
                    label="NFT Description"
                    name="nftDescription"
                    rules={[{ required: true, message: 'Please input a description for your NFT' }]}
                    style={{ width: '100%', margin: '0 auto' }}
                >
                    <Input.TextArea placeholder="Enter the description of your NFT" rows={3} />
                </Form.Item>
                <Form.Item
                    label="Token ID"
                    name="tokenId"
                    rules={[{ required: true, message: 'Please input the ID of the token you are referencing' }]}
                    style={{ width: '100%', margin: '0 auto' }}
                >
                    <Input placeholder="Enter the ID of the token you are referencing" />
                </Form.Item>
                <Button type="primary" htmlType="submit">Create NFT</Button>
            </Form>
        </div>
    );
};

export default CreateNftPage;
