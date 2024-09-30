import { BookOutlined, LockOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
const { Title } = Typography;

const WhyChooseUs = () => {
    return (
        <div style={{ marginTop: "80px" }}>
            <Title
                style={{
                    textAlign: 'center',
                    marginBottom: '24px',
                    animation: 'fadeIn 1s ease-in'
                }}
            >
                Why Choose Us?
            </Title>
            <Row gutter={16}>
                <Col xs={24} sm={12}>
                    <Card hoverable>
                        <BookOutlined style={{ fontSize: '36px', color: '#1890ff' }} />
                        <h2>Seamless Booking Experience</h2>
                        <p style={{ textAlign: "justify" }}>We understand that booking a room should be as effortless as possible. Our platform is designed to provide a seamless booking experience, allowing you to find and reserve the perfect space with just a few clicks. From real-time availability to instant booking confirmation, the process is streamlined to save you time and effort. You can browse through rooms, check availability, and book without any unnecessary steps or complications. With features like flexible scheduling, you can easily adjust your booking if plans change. Our user-friendly interface ensures that even those who aren't tech-savvy can navigate the booking process effortlessly.</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12}>
                    <Card hoverable>
                        <LockOutlined style={{ fontSize: '36px', color: '#52c41a' }} />
                        <h2>Secure Transactions</h2>
                        <p style={{ textAlign: "justify" }}>When it comes to online booking, ensuring the safety of your personal and financial information is a top priority. Secure transactions are a cornerstone of a reliable booking platform. Our system uses industry-standard encryption technologies to protect your data during the booking and payment processes. Whether you're paying via credit card, PayPal, or other secure methods, you can trust that your information is being handled with the utmost security. Additionally, our platform is compliant with global security standards such as PCI DSS (Payment Card Industry Data Security Standard), ensuring that your payment details are safeguarded against fraud and unauthorized access.</p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default WhyChooseUs;