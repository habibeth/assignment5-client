import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Drawer, Dropdown, Menu, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import { navbarPaths } from "../../../routes/Navbar.routes";
import { navbarGenerator } from "../../../utlis/navbarGenerator";
import logo from '../../../assets/logo.png'
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { logout, useCurrentToken } from "../../../redux/feature/auth/authSlice";
import { verifyToken } from "../../../utlis/verifyToken";


const Navbar = () => {
    const token = useAppSelector(useCurrentToken);
    const dispatch = useAppDispatch();

    let user: any;
    if (token) {
        user = verifyToken(token);
    }

    const [drawerOpen, setDrawerOpen] = useState(false);

    const showDrawer = () => {
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    let navbarItems = navbarGenerator(navbarPaths);

    const adminItems = [
        {
            key: 'Dashboard',
            label: <NavLink to="/admin/dashboard">Dashboard</NavLink>
        },
        {
            key: 'Logout',
            label: <NavLink to="/" onClick={() => dispatch(logout())} style={{ color: 'red' }}>Logout</NavLink>
        },
    ];

    const userItems = [
        {
            key: 'My Booking',
            label: <NavLink to="/user/myBookings">My Bookings</NavLink>
        },
        {
            key: 'Logout',
            label: <NavLink to="/" onClick={() => dispatch(logout())} style={{ color: 'red' }}>Logout</NavLink>
        },
    ];

    const items = user?.role === 'admin' ? [...adminItems] : [...userItems];
    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="" style={{ height: '70px' }} />
            </Link>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={navbarItems}
                className="desktop-menu"
                style={{ flex: 1, minWidth: 0, textAlign: 'center' }}
            />
            <div>
                {
                    user?.role ?
                        <Dropdown menu={{ items }} trigger={['hover']} placement="bottom">
                            <Button type="text">
                                <Space>
                                    {
                                        user?.profileImage ? (
                                            <Avatar src={user?.profileImage} size={50} />
                                        )
                                            :
                                            <Avatar style={{ backgroundColor: 'gray', verticalAlign: 'middle' }} size="large">
                                                <UserOutlined />
                                            </Avatar>
                                    }
                                </Space>
                            </Button>
                        </Dropdown>
                        :
                        <NavLink to="/login" style={{ color: 'white' }}>Login</NavLink>

                }
            </div>
            <Button
                className="mobile-menu-button"
                type="text"
                icon={<MenuOutlined style={{ color: '#fff' }} />}
                onClick={showDrawer}
                style={{ marginLeft: 'auto' }}
            />

            <Drawer
                title="Menu"
                placement="left"
                onClose={closeDrawer}
                open={drawerOpen}
            >
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['2']}
                    items={navbarItems}
                />
            </Drawer>
        </Header>
    );
};

export default Navbar;