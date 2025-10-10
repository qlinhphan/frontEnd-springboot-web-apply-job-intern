import React, { useState } from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { Link } from "react-router-dom";
import ViewRoleAdmin from './view.role.admin';
import ViewRoleUser from './view.role.user';
import ViewRoleMana from './view.role.manager';


type MenuItem = Required<MenuProps>['items'][number];



const Menus: React.FC = () => {
    const [isModalOpenAdmin, setIsModalOpenAdmin] = useState(false);
    const [isModalOpenUser, setIsModalOpenUser] = useState(false);
    const [isModalOpenMana, setIsModalOpenMana] = useState(false);

    const showModalAdmin = () => {
        setIsModalOpenAdmin(true);
    };
    const showModalUser = () => {
        setIsModalOpenUser(true);
    };
    const showModalMana = () => {
        setIsModalOpenMana(true);
    };
    const items: MenuItem[] = [
        { key: '0', label: <Link to={'/admin'}>QLinh App</Link> },
        { key: '1', icon: <PieChartOutlined />, label: <Link to={'/admin'}>Dashboard</Link> },
        { key: '2', icon: <DesktopOutlined />, label: <Link to={'/admin/user'}>Quản lý người dùng</Link> },
        { key: '3', icon: <DesktopOutlined />, label: <Link to={'/admin/company'}>Quản lý công ty</Link> },
        { key: '4', icon: <ContainerOutlined />, label: <Link to={'/admin/job'}>Quản lý công việc</Link> },
        {
            key: 'sub1',
            label: 'Navigation One',
            icon: <MailOutlined />,
            children: [
                { key: '5', label: 'Option 5' },
                { key: '6', label: 'Option 6' },
                { key: '7', label: 'Option 7' },
                { key: '8', label: 'Option 8' },
            ],
        },
        {
            key: 'sub2',
            label: 'Danh sách vai trò',
            icon: <AppstoreOutlined />,
            children: [
                {
                    key: '9', label: <div onClick={() => { showModalAdmin() }}>Admin</div>
                },
                { key: '10', label: <div onClick={() => { showModalMana() }}>Manager</div> },
                { key: '11', label: <div onClick={() => { showModalUser() }}>User</div> },
            ],
        },
    ];
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={{ width: 256, margin: '0px', height: '100vh', backgroundColor: 'red' }}>
            {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button> */}
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                style={{ height: '100%' }}
            />
            <div>
                <ViewRoleAdmin isModalOpenAdmin={isModalOpenAdmin} setIsModalOpenAdmin={setIsModalOpenAdmin}></ViewRoleAdmin>
            </div>
            <div>
                <ViewRoleUser isModalOpenUser={isModalOpenUser} setIsModalOpenUser={setIsModalOpenUser}></ViewRoleUser>
            </div>
            <div>
                <ViewRoleMana isModalOpenMana={isModalOpenMana} setIsModalOpenMana={setIsModalOpenMana}></ViewRoleMana>
            </div>
        </div>
    );
};

export default Menus;