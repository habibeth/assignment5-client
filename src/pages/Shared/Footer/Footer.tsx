
import { Row, Col, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Footer } = Layout;

const FooterPage = () => {
    return (
        <Footer style={{ backgroundColor: '#001529', color: 'white', padding: '50px 0 50px 130px', paddingLeft: '100px', overflow: "hidden" }}>
            <Row gutter={16} justify="space-between">
                <Col xs={24} sm={12} md={6}>
                    <h3 style={{ marginBottom: '15px', fontSize: '24px' }}>Contact US</h3>
                    <p style={{ margin: '10px 0', fontSize: '14px' }}>Email: support@meetmate.com</p>
                    <p style={{ margin: '10px 0', fontSize: '14px' }}>Phone: +880 1111 111 111</p>
                    <p style={{ margin: '10px 0', fontSize: '14px' }}>Address: Dhaka, Bangladesh</p>
                </Col>

                <Col xs={24} sm={12} md={6}>
                    <h3 style={{ marginBottom: '15px', fontSize: '24px' }}>Follow Us</h3>
                    <p style={{ margin: '10px 0', fontSize: '14px' }}>
                        <Link to="https://facebook.com" style={{ color: 'white' }}>Facebook</Link>
                    </p>
                    <p style={{ margin: '10px 0', fontSize: '14px' }}>
                        <Link to="https://twitter.com" style={{ color: 'white' }}>Twitter</Link>
                    </p>
                    <p style={{ margin: '10px 0', fontSize: '14px' }}>
                        <Link to="https://instagram.com" style={{ color: 'white' }}>Instagram</Link>
                    </p>
                    <p style={{ margin: '10px 0', fontSize: '14px' }}>
                        <Link to="https://linkedin.com" style={{ color: 'white' }}>LinkedIn</Link>
                    </p>
                </Col>

                <Col xs={24} sm={12} md={6}>
                    <h3 style={{ marginBottom: '15px', fontSize: '24px' }}>Our Information</h3>
                    <p style={{ margin: '10px 0', fontSize: '14px' }}>
                        <Link to="/about" style={{ color: 'white' }}>About Us</Link>
                    </p>
                    <p style={{ margin: '10px 0', fontSize: '14px' }}>
                        <Link to="/career" style={{ color: 'white' }}>Careers</Link>
                    </p>
                    <p style={{ margin: '10px 0', fontSize: '14px' }}>
                        <Link to="/products" style={{ color: 'white' }}>Products</Link>
                    </p>
                    <p style={{ margin: '10px 0', fontSize: '14px' }}>
                        <Link to="/contact" style={{ color: 'white' }}>Contact US</Link>
                    </p>
                </Col>

                <Col xs={24} sm={12} md={6} style={{ paddingLeft: '20px' }}>
                    <h3 style={{ marginBottom: '15px', fontSize: '24px' }}>Support</h3>
                    <p style={{ margin: '10px 0', fontSize: '14px' }}>
                        <Link to="https://facebook.com" style={{ color: 'white' }}>FAQ</Link>
                    </p>
                    <p style={{ margin: '10px 0', fontSize: '14px' }}>
                        <Link to="https://twitter.com" style={{ color: 'white' }}>Help Center</Link>
                    </p>
                    <p style={{ margin: '10px 0', fontSize: '14px' }}>
                        <Link to="https://instagram.com" style={{ color: 'white' }}>Terms of Service</Link>
                    </p>
                    <p style={{ margin: '10px 0', fontSize: '14px' }}>
                        <Link to="https://linkedin.com" style={{ color: 'white' }}>Privacy Policy</Link>
                    </p>
                </Col>
            </Row>
        </Footer>
    );
};

export default FooterPage;
