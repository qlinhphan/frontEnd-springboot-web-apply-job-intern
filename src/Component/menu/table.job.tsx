import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
    key: string;
    id: string
    nameJob: string;
    active: boolean;
}

interface Iprops {
    allJobs: any
    showModal: any
    showModalDel: any
}


const TableJob: React.FC<Iprops> = ({ allJobs, showModal, showModalDel }) => {
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Mã công việc',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Tên công việc',
            dataIndex: 'nameJob',
            key: 'nameJobs',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'active',
            key: 'active',
            render: (value: boolean) => (
                value ? <Tag color="green">Đang hoạt động</Tag> : <Tag color="red">Ngừng</Tag>
            ),
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" ghost onClick={() => { showModal(record.id) }}>
                        Sửa...
                    </Button>
                    <Button type="primary" danger ghost onClick={() => { showModalDel(record.id) }}>
                        Xóa
                    </Button>
                </Space>
            ),
        },
    ];
    return (
        <Table<DataType> columns={columns} pagination={false} dataSource={allJobs} />
    )
}

export default TableJob;