import React, { useState } from 'react';
import { Row, Col, Card, Pagination } from 'antd';

const { Meta } = Card;

const data = [
    {
        title: '展板1',
        description: '这是展板1的介绍文字',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '展板2',
        description: '这是展板2的介绍文字',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '展板3',
        description: '这是展板3的介绍文字',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '展板4',
        description: '这是展板4的介绍文字',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '展板5',
        description: '这是展板5的介绍文字',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '展板6',
        description: '这是展板6的介绍文字',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '展板7',
        description: '这是展板7的介绍文字',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '展板8',
        description: '这是展板8的介绍文字',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '展板9',
        description: '这是展板9的介绍文字',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '展板10',
        description: '这是展板10的介绍文字',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '展板11',
        description: '这是展板11的介绍文字',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '展板12',
        description: '这是展板12的介绍文字',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '展板13',
        description: '这是展板13的介绍文字',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '展板14',
        description: '这是展板14的介绍文字',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: '展板15',
        description: '这是展板15的介绍文字',
        image: 'https://via.placeholder.com/150',
    },
];

const Panel = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;
    const totalItems = data.length;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    const currentData = data.slice(start, end);

    return (
        <div style={{ padding: '20px' }}>
            <Row gutter={[16, 16]}>
                    {
                        currentData.map((item) => (
                            <Col key={item.title} xs={24} sm={12} md={8} lg={6}>
                                <Card
                                    hoverable
                                    cover={<img alt={item.title} src={item.image} />}
                                >
                                    <Meta title={item.title} description={item.description} />
                                </Card>
                            </Col>
                        ))
                    }
            </Row>
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={totalItems}
                onChange={handlePageChange}
                style={{ marginTop: '20px' }}
            />
        </div>
    );
}

export default Panel;