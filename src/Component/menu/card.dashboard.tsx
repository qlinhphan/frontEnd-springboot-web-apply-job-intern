import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Space, Table, TableProps, Tag } from 'antd';

interface Iprops {
    dataDash: any
}
const CardDashboard: React.FC<Iprops> = ({ dataDash }) => {
    const [countUser, setCountUser] = useState()
    const [countJob, setCountJob] = useState()
    const [countAllInListRegister, setCountAllInListRegister] = useState()
    const [countPending, setCountPending] = useState()
    const [countSuccess, setCountSuccess] = useState()
    const [date, setDate] = useState([])

    useEffect(() => {
        setCountUser(dataDash?.countUser)
        setCountJob(dataDash?.countJob)
        setCountAllInListRegister(dataDash?.countAllInListRegister)
        setCountPending(dataDash?.countPending)
        setCountSuccess(dataDash?.countSuccess)
        setDate(dataDash?.userJobs)
    }, [dataDash])

    const column2: TableProps['columns'] = [
        {
            title: 'Mã đơn đã apply thành công',
            dataIndex: ['id'],
            key: 'name2',
            render: (text) => <a>{text}-Mã đơn</a>,
        },
        {
            title: 'Năm-tháng-ngày Giờ-phút-giây',
            dataIndex: ['timeSend'],
            key: 'age2',
        },
    ];
    return (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="Số lượng người dùng trong hệ thống" variant="borderless">
                    Số lượng người dùng trong hệ thống: <span style={{ color: 'red' }}>{countUser}</span>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Số lượng công việc hiện có" variant="borderless">
                    Số lượng công việc hiện có: <span style={{ color: 'red' }}>{countJob}</span>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Số lượng đơn đăng ký" variant="borderless">
                    Số lượng đơn đăng ký công việc: <span style={{ color: 'red' }}>{countAllInListRegister}</span>
                </Card>

            </Col>
            <div style={{ width: '100%', marginTop: '21px', display: 'flex', justifyContent: 'center' }}>
                <Col span={8}>
                    <Card title="Số lượng đơn chờ" variant="borderless">
                        Số lượng đơn chờ: <span style={{ color: 'red' }}>{countPending}</span>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Số lượng đơn được gọi PV" variant="borderless">
                        Số lượng đơn được gọi: <span style={{ color: 'red' }}>{countSuccess}</span>
                    </Card>
                </Col>
            </div>
            <div style={{ width: '100%', marginTop: '43px', display: 'flex', marginLeft: '8px' }}>
                <Table columns={column2} style={{ width: '100%' }} dataSource={date} />;
            </div>

        </Row>
    )
}



export default CardDashboard;