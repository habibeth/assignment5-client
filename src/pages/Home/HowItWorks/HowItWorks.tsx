import { CalendarOutlined, CheckCircleOutlined, HomeOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
const { Title } = Typography;

const HowItWorks = () => {
    return (
        <div style={{ marginTop: "80px" }}>
            <Title
                style={{
                    textAlign: 'center',
                    marginBottom: '24px',
                    animation: 'fadeIn 1s ease-in'
                }}
            >
                How It Works
            </Title>
            <Row gutter={16} justify="center">
                <Col xs={24} sm={8}>
                    <Card hoverable>
                        <HomeOutlined style={{ fontSize: '36px', color: '#faad14' }} />
                        <h3>Select a Room</h3>
                        <p>Browse our rooms and choose the one that fits your needs.</p>
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card hoverable>
                        <CalendarOutlined style={{ fontSize: '36px', color: '#1890ff' }} />
                        <h3>Choose Date & Time</h3>
                        <p>Pick a convenient date and time for your booking.</p>
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card hoverable>
                        <CheckCircleOutlined style={{ fontSize: '36px', color: '#52c41a' }} />
                        <h3>Confirm Booking</h3>
                        <p>Complete your booking and get instant confirmation.</p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default HowItWorks;