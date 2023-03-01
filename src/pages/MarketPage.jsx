import { Card, Col, Row } from 'antd';

const NftData = [
    {
        id: 1,
        name: 'NFT 1',
        description: 'This is NFT 1',
        price: '1 ETH',
        image: 'https://picsum.photos/id/237/200/300',
    },
    {
        id: 2,
        name: 'NFT 2',
        description: 'This is NFT 2',
        price: '0.5 ETH',
        image: 'https://picsum.photos/id/238/200/300',
    },
    {
        id: 3,
        name: 'NFT 3',
        description: 'This is NFT 3',
        price: '2 ETH',
        image: 'https://picsum.photos/id/239/200/300',
    },
    {
        id: 4,
        name: 'NFT 4',
        description: 'This is NFT 4',
        price: '1 ETH',
        image: 'https://picsum.photos/id/240/200/300',
    },
    {
        id: 5,
        name: 'NFT 5',
        description: 'This is NFT 5',
        price: '1 ETH',
        image: 'https://picsum.photos/id/241/200/300',
    },
    {
        id: 6,
        name: 'NFT 6',
        description: 'This is NFT 6',
        price: '1 ETH',
        image: 'https://picsum.photos/id/242/200/300',
    },
    {
        id: 7,
        name: 'NFT 7',
        description: 'This is NFT 7',
        price: '1 ETH',
        image: 'https://picsum.photos/id/243/200/300',
    },
    {
        id: 8,
        name: 'NFT 8',
        description: 'This is NFT 8',
        price: '1 ETH',
        image: 'https://picsum.photos/id/244/200/300',
    },
];

const MarketPage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Row gutter={[16, 16]}>
                {NftData.map((item) => (
                    <Col xs={24} sm={12} md={8} lg={6} xl={4} key={item.id}>
                        <Card
                            hoverable
                            cover={<img alt="example" src={item.image} style={{ height: '200px' }} />}
                            actions={[
                                <div>{item.price}</div>,
                                <div>Bid</div>,
                            ]}
                        >
                            <Card.Meta title={item.name} description={item.description} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MarketPage;
