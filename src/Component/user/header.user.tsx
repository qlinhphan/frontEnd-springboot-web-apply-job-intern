import { MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown, Row, Tag, Typography } from 'antd';
import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Link } from 'react-router-dom';


const { Paragraph } = Typography;

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                Bảo mật & Tài khoản
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                Đăng xuất
            </a>
        ),
    },
];

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

const HeaderUser: React.FC = () => (
    <PageContainer
        title="QLinhCV"
        className="site-page-header"
        subTitle="Đây là một website giúp bạn xin việc"
        tags={<Tag color="blue">Running</Tag>}
        extra={[
            <Button key="3"><Link to={'/'}>Tìm công việc</Link></Button>,
            <Button key="2"><Link to={'/update-profile'}>Cập nhật profile</Link></Button>,
            <Button key="1" type="primary">
                <Link to={'/view-list-registerd'}>Xem danh sách đăng ký</Link>
            </Button>,
            <DropdownMenu key="more" />,
        ]}
    >
    </PageContainer>
);

export default HeaderUser;