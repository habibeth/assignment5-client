import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { logout } from "../../redux/feature/auth/authSlice";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
    const dispatch = useAppDispatch();
    return (
        <Layout style={{ height: "100%" }}>
            <Sidebar />
            <Layout>
                <Header onClick={() => dispatch(logout())} style={{ color: "white", fontWeight: "700", fontSize: "20px", cursor: "pointer" }}>Logout</Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;