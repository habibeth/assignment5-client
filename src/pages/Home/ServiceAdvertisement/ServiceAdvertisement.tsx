import { CalendarOutlined, CheckCircleOutlined, ClockCircleOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";

const ServiceAdvertisement = () => {
    return (
        <div style={{ margin: "50px 0" }}>
            <div style={{ overflow: 'hidden', margin: 'auto', maxWidth: "1100px" }}>
                <Row gutter={10}>
                    <Col xs={24} sm={12} md={6} >
                        <Card hoverable style={{ backgroundColor: '#b5f5ec' }}>
                            <ClockCircleOutlined style={{ fontSize: '36px', color: '#1890ff', margin: '5px 0' }} />
                            <h3>Real-Time Availability</h3>
                            <p>Check availability and book in real time.</p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Card hoverable style={{ backgroundColor: '#d9f7be' }}>
                            <CheckCircleOutlined style={{ fontSize: '36px', color: '#52c41a', margin: '5px 0' }} />
                            <h3>Instant Booking</h3>
                            <p>Get instant confirmation after booking.</p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Card hoverable style={{ backgroundColor: '#ffd6e7' }}>
                            <CalendarOutlined style={{ fontSize: '36px', color: '#faad14', margin: '5px 0' }} />
                            <h3>Flexible Scheduling</h3>
                            <p>Book or reschedule at your convenience.</p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Card hoverable style={{ backgroundColor: '#efdbff' }}>
                            <CustomerServiceOutlined style={{ fontSize: '36px', color: '#eb2f96', margin: '5px 0' }} />
                            <h3>24/7 Support</h3>
                            <p>Our team is here to help you anytime.</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ServiceAdvertisement;