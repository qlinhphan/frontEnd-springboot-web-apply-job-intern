import { MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown, notification, Row, Tag, Typography } from 'antd';
import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutApp } from '@/apiService/auth.api';


const { Paragraph } = Typography;

const HeaderUser: React.FC = () => {

    const accessToken = useSelector((state: any) => state.user.info.accessToken)
    const navigate = useNavigate()
    const dispath = useDispatch()

    const logout = async () => {
        try {
            const rs = await logoutApp(accessToken)
            dispath({
                type: 'logout_success',
                payload: ''
            })
            navigate("/login")
        } catch (error) {
            notification.error({
                message: 'Thao tac that bai',
                description: "Dang xuat that bai"
            })
        }
    }

    const DropdownMenu = () => (
        <Dropdown key="more" menu={{ items }} placement="bottomRight">
            <Button type="text" icon={<MoreOutlined style={{ fontSize: 20 }} />} />
        </Dropdown>
    );

    const IconLink = ({ src, text }: { src: string; text: string }) => (
        <a className="example-link">
            <img className="example-link-icon" src={src} alt={text} />
            {text}
        </a>
    );



    const Content: React.FC<{ children: React.ReactNode; extraContent: React.ReactNode }> = ({
        children,
        extraContent,
    }) => (
        <Row>
            <div style={{ flex: 1 }}>{children}</div>
            <div className="image">{extraContent}</div>
        </Row>
    );
    const items = [
        {
            key: '1',
            label: (
                <a rel="noopener noreferrer" href="update-profile">
                    Bảo mật & Tài khoản
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <Button onClick={() => { logout() }}>Đăng xuất</Button>
            ),
        },
    ];
    return (
        <PageContainer
            title="QLinhCV"
            className="site-page-header"
            subTitle="Đây là một website giúp bạn xin việc"
            tags={<Tag color="blue">Running</Tag>}
            extra={[
                <Button key="3"><Link to={'/'}>Tìm công việc</Link></Button>,
                <Button key="1" type="primary">
                    <Link to={'/view-list-registerd'}>Xem danh sách đăng ký</Link>
                </Button>,
                <DropdownMenu key="more" />,
            ]}
        >
        </PageContainer>
    )
}

export default HeaderUser;