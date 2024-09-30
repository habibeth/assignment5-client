import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import { adminPaths } from "../../routes/admin.routes";
import { sidebarGenerator } from "../../utlis/sidebarGenerator";

const userRole = {
    ADMIN: 'admin',
    USER: 'user',
}

const Sidebar = () => {

    let sidebarItems = sidebarGenerator(adminPaths, userRole.ADMIN);

    return (
        <Sider
            style={{ height: '100vh', position: 'sticky', top: '0', left: '0' }}
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <Link to="/">
                <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                    <img src={logo} alt="" style={{ height: '50px', width: '50px', margin: '0 15px' }} />
                    <h2>Meet Mate</h2>
                </div>
            </Link>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;