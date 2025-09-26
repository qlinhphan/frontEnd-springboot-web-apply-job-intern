import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
    key: string;
    id: string
    name: string;
    address: string;
}

interface Iprops {
    allUsers: any
    showModalUpdate: any
    showLoadingDelete: any
}



const TableCompany: React.FC<Iprops> = ({ allUsers, showModalUpdate, showLoadingDelete }) => {
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Id công ty',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Tên công ty',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" ghost onClick={() => { showModalUpdate(record.id) }}>
                        Sửa...
                    </Button>
                    <Button type="primary" danger ghost onClick={() => { showLoadingDelete(record.id) }}>
                        Xóa
                    </Button>
                </Space>
            ),
        },
    ];
    return (
        <Table<DataType> columns={columns} pagination={false} dataSource={allUsers} />
    )
}

export default TableCompany;