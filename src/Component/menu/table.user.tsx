import React, { useEffect, useState } from 'react';
import { Button, Flex, Pagination, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import axios from 'axios';

interface DataType {
    address: string,
    email: string,
    name: string,
    role: string
    id: string
}




interface Iprops {
    allUsers: any,
    setAllUsers: any,
    showModalUpdate: any
    showModal: any
}



const TableUser: React.FC<Iprops> = ({ allUsers, setAllUsers, showModalUpdate, showModal }) => {

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">

                    <Flex wrap gap="small">
                        <Button danger onClick={() => { showModalUpdate(record.id) }}>Sửa thông tin</Button>
                        <Button type="primary" danger onClick={() => { showModal(record.id) }}>
                            Xóa
                        </Button>

                    </Flex>
                </Space>
            ),
        },

    ];
    return (
        <div>
            <Table<DataType> columns={columns} dataSource={allUsers} pagination={false} />

        </div>

    )
}

export default TableUser;