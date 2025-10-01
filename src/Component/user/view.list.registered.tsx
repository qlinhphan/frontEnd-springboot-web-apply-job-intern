import { Card, Space, Table } from "antd";
import { useState } from "react";

// tab1: <p>Tên Công việc: </p>,
//         tab2: <p>Mô tả công việc</p>,
//         tab3: <p>Hình thức làm việc</p>,
//         tab4: <p>Tên công ty</p>,
//         tab5: <p>Địa chỉ công ty</p>,

const ViewListRegistered = () => {
    const columns = [
        {
            title: 'Tên công việc',
            dataIndex: 'nameJob',
            key: 'nameJob',
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: 'Mô tả công việc',
            dataIndex: 'desJob',
            key: 'desJob',
        },
        {
            title: 'Yêu cầu',
            dataIndex: 'typeJob',
            key: 'typeJob',
        },
        {
            title: 'Lợi ích',
            dataIndex: 'nameCom',
            key: 'nameCom',
        },
        {
            title: 'Hình thức làm việc',
            dataIndex: 'addressCom',
            key: 'addressCom',
        },
        {
            title: 'Lương',
            dataIndex: 'addressCom',
            key: 'addressCom',
        },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (_, record: any) => (
        //         <Space size="middle">
        //             <a>Invite {record.name}</a>
        //             <a>Delete</a>
        //         </Space>
        //     ),
        // },
    ];
    return (
        <div style={{ marginTop: '50px' }}>
            <Table columns={columns} />;
        </div>
    )
}

export default ViewListRegistered