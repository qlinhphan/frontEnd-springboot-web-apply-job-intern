import React, { useState } from 'react';
import { Divider, Radio, Space, Table, Tag } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';






// rowSelection object indicates the need for row selection
// const rowSelection: TableProps<DataType>['rowSelection'] = {
//     onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
//         console.log('selectedRows: ', selectedRows);
//     }
// };


interface Iprops {
    allJobCom: any,
    showModal: any
}
const TableShowAllJob: React.FC<Iprops> = ({ allJobCom, showModal }) => {
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

    const columns = [
        {
            title: 'Tên công việc',
            dataIndex: ['job', 'nameJob'],
        },
        {
            title: 'Trạng thái',
            dataIndex: ['job', 'active'],
            render: (value: boolean) => (
                value == true ? <Tag style={{ color: "green" }}>Đang tuyển</Tag> : <Tag style={{ color: "red" }}>dừng tuyển</Tag>
            ),
        },
        {
            title: 'số lượng tuyển',
            dataIndex: ['job', 'limitPeopleForJob'],
        },
        {
            title: 'Tên công ty',
            dataIndex: ['company', 'name'],
        },
        {
            title: 'Địa chỉ công ty',
            dataIndex: ['company', 'address'],
        },
        {
            // {record.id}
            title: 'Action',
            key: 'action',
            render: (_: any, record: any) => (
                <Space size="middle">
                    <a style={{ textDecoration: 'underline' }} onClick={() => { showModal(record.id) }}>Xem chi tiết công việc</a>
                </Space>
            ),
        },
    ];


    return (
        <div>

            <div style={{ width: '1200px' }}>
                <Table
                    // rowSelection={{ type: selectionType, ...rowSelection }}
                    columns={columns}
                    dataSource={allJobCom}
                    pagination={false}

                />
            </div>
        </div>
    );
};

export default TableShowAllJob;