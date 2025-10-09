import React from 'react';
import { Card, Col, Row, Space, Table, TableProps, Tag } from 'antd';

const CardDashboard: React.FC = () => {
    const columns: TableProps['columns'] = [
        {
            title: 'Mã đơn',
            dataIndex: 'id',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Ngày/tháng/năm Giờ/phút/giây',
            dataIndex: 'age',
            key: 'age',
        },
        // {
        //     title: 'Address',
        //     dataIndex: 'address',
        //     key: 'address',
        // },
        // {
        //     title: 'Tags',
        //     key: 'tags',
        //     dataIndex: 'tags',
        //     render: (_, { tags }) => (
        //         <>
        //             {tags.map((tag: any) => {
        //                 let color = tag.length > 5 ? 'geekblue' : 'green';
        //                 if (tag === 'loser') {
        //                     color = 'volcano';
        //                 }
        //                 return (
        //                     <Tag color={color} key={tag}>
        //                         {tag.toUpperCase()}
        //                     </Tag>
        //                 );
        //             })}
        //         </>
        //     ),
        // },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (_, record) => (
        //         <Space size="middle">
        //             <a>Invite {record.name}</a>
        //             <a>Delete</a>
        //         </Space>
        //     ),
        // },
    ];
    return (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="Số lượng người dùng trong hệ thống" variant="borderless">
                    Số lượng người dùng trong hệ thống
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Số lượng công việc hiện có" variant="borderless">
                    Số lượng công việc hiện có
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Số lượng đơn đăng ký" variant="borderless">
                    Số lượng đơn đăng ký
                </Card>

            </Col>
            <div style={{ width: '100%', marginTop: '21px', display: 'flex', justifyContent: 'center' }}>
                <Col span={8}>
                    <Card title="Số lượng đơn chờ" variant="borderless">
                        Số lượng đơn chờ
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Số lượng đơn được gọi PV" variant="borderless">
                        Số lượng đơn được gọi
                    </Card>
                </Col>
            </div>

            <div style={{ width: '100%', marginTop: '43px', display: 'flex', marginLeft: '8px' }}>
                <Table columns={columns} style={{ width: '100%' }} />;
            </div>

        </Row>
    )
}



export default CardDashboard;