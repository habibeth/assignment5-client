
import { Layout } from "antd"
import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import FooterPage from "../../pages/Shared/Footer/Footer";


const { Content } = Layout;

const MainLayout = () => {
    return (
        <Layout>
            <Navbar />
            <Layout style={{ minHeight: '100vh' }}>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
            <FooterPage />
        </Layout>
    );
};

export default MainLayout;