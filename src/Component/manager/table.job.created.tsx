import React, { useEffect, useState } from 'react';
import { Button, Pagination, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useSelector } from 'react-redux';
import { findAllHasPageJC, findByIdJC } from '@/apiService/manager.create.job.comp';
import ModalUpdateJob from './table.job.created/update';
import ModalDeleteJob from './table.job.created/delete';





const TableJobCreated: React.FC = () => {

    const accessToken = useSelector((state: any) => state.user.info.accessToken)

    const [dataJC, setDataJC] = useState([])
    const [limit, setLimit] = useState()
    const [sumObj, setSumObj] = useState()
    const [current, setCurrent] = useState()

    const fetchAllJC = async () => {
        const rs = await findAllHasPageJC(1, 5, accessToken);
        setDataJC(rs.data.data.data)
        setCurrent(rs.data.data.current)
        setSumObj(rs.data.data.sumObj)
        setLimit(rs.data.data.limit)
        // console.log(rs.data.data.data)
    }

    useEffect(() => {
        fetchAllJC()
    }, [])

    const changePage = async (numberPage: number) => {
        const rs = await findAllHasPageJC(numberPage, 5, accessToken);
        setDataJC(rs.data.data.data)
        setCurrent(rs.data.data.current)
        setSumObj(rs.data.data.sumObj)
        setLimit(rs.data.data.limit)
    }

    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
    const [dataJobToEdit, setDataJobToEdit] = useState({})
    const showModalUpdate = async (id: number) => {
        setIsModalOpenUpdate(true);
        const rs = await findByIdJC(id, accessToken)
        setDataJobToEdit(rs.data.data.job)
    };

    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
    const [dataJobToDel, setDataJobToDel] = useState({})
    const showModalDelete = async (id: number) => {
        setIsModalOpenDelete(true);
        const rs = await findByIdJC(id, accessToken)
        setDataJobToDel(rs.data.data.job)
    };

    const columns: TableProps<any>['columns'] = [
        {
            title: 'Tên công ty',
            dataIndex: ['company', 'name'],
            key: 'nameCom',
        },
        {
            title: 'Địa chỉ',
            dataIndex: ['company', 'address'],
            key: 'address',
        },
        {
            title: 'Tên công việc',
            dataIndex: ['job', 'nameJob'],
            key: 'nameJob',
        },
        {
            title: 'Só lượng tuyển',
            dataIndex: ['job', 'limitPeopleForJob'],
            key: 'limitForJob',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button color="cyan" variant="solid" onClick={() => { showModalUpdate(record.id) }}>
                        Sửa...
                    </Button>
                    <Button color="cyan" variant="outlined" onClick={() => { showModalDelete(record.id) }}>
                        Xóa
                    </Button>
                </Space>
            ),
        },
    ];


    return (
        <div style={{ width: '96%' }}>
            <div className='table-JC' style={{ height: '375px' }}>
                <Table<any> columns={columns} dataSource={dataJC} pagination={false} />
            </div>
            <div style={{ marginTop: '17px' }}>
                <Pagination
                    total={sumObj}
                    current={current}
                    pageSize={limit}
                    showTotal={(total) => `Total ${total} items`}
                    onChange={changePage}
                    align='center'
                />
            </div>
            <div>
                <ModalUpdateJob isModalOpenUpdate={isModalOpenUpdate} setIsModalOpenUpdate={setIsModalOpenUpdate}
                    dataJobToEdit={dataJobToEdit} fetchAllJC={fetchAllJC}
                ></ModalUpdateJob>
            </div>
            <div>
                <ModalDeleteJob isModalOpenDelete={isModalOpenDelete} setIsModalOpenDelete={setIsModalOpenDelete}
                    dataJobToDel={dataJobToDel} fetchAllJC={fetchAllJC}
                ></ModalDeleteJob>
            </div>
        </div>
    )
}

export default TableJobCreated;