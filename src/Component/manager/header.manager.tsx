import { MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown, Row, Tag, Typography } from 'antd';
import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutApp } from '@/apiService/auth.api';




const HeaderManager: React.FC = () => {
    const { Paragraph } = Typography;

    const navi = useNavigate()
    const dispath = useDispatch()
    const accessToken = useSelector((state: any) => state.user.info.accessToken)

    const logoutOk = async () => {
        navi('/login')
        const rs = await logoutApp(accessToken)
        dispath({
            type: 'logout_success',
            payload: ""
        })
    }

    const items = [
        {
            key: '0',
            label: (
                <a rel="noopener noreferrer" href="/manager/table-job-created">
                    Công việc bạn đã tạo
                </a>
            ),
        },
        {
            key: '1',
            label: (
                <a rel="noopener noreferrer" href="/manager/view-infor-your-self">
                    Thông tin về bạn
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" onClick={() => { logoutOk() }}>
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
    return (
        <PageContainer
            title="QLinhCV"
            className="site-page-header"
            subTitle="Hãy thêm mới một cv cho công ty của bạn"
            tags={<Tag color="blue">Running</Tag>}
            extra={[
                <Button key="3"><Link to={'/manager'}>Thêm mới công việc</Link></Button>,
                <Button key="2"><Link to={'/manager/update-inf'}>Cập nhật thông tin tài khoản</Link></Button>,
                <Button key="1" type="primary">
                    <Link to={'/manager/view-list-apply'}>Xem danh sách ứng viên</Link>
                </Button>,
                <DropdownMenu key="more" />,
            ]}
        >
        </PageContainer>
    )
}

export default HeaderManager;