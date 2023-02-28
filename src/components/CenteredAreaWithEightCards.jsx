import React from "react";
import { Row, Col, Card } from "antd";
import 'antd/dist/reset.css';

const { Meta } = Card;

const CenteredAreaWithEightCards = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Row gutter={[16, 16]}>
                {[...Array(8)].map((_, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            hoverable
                            style={{ width: "100%" }}
                            cover={<img alt={`Image ${index}`} src={`https://picsum.photos/200/200?random=${index}`} />}
                        >
                            <Meta title={`Card ${index}`} description={`Description for Card ${index}`} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CenteredAreaWithEightCards;
