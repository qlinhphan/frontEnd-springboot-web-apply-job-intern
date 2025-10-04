import { deleteUserJobForUser, userViewUserJobTheir } from "@/apiService/user.page.api";
import { Button, Card, notification, Pagination, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ViewListRegistered = () => {
    const accessToken = useSelector((state: any) => state.user.info.accessToken)
    const actionDel = async (idUserJob: number) => {
        try {
            const rs = await deleteUserJobForUser(idUserJob, accessToken)
            fetchAllForThem()
            notification.success({
                message: "Thao tác hoàn tất",
                description: 'Bạn đã xóa công việc thành công'
            })
        } catch (error) {
            notification.error({
                message: 'Thao tác thất bại',
                description: 'Xóa công việc thất bại'
            })
        }

    }
    const columns = [
        {
            title: 'Tên công việc',
            dataIndex: ['job', 'nameJob'],
            key: 'nameJob',
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: 'Mô tả công việc',
            dataIndex: ['job', 'description'],
            key: 'desJob',
        },
        {
            title: 'Yêu cầu',
            dataIndex: ['job', 'jobRequire'],
            key: 'typeJob',
        },
        {
            title: 'Lợi ích',
            dataIndex: ['job', 'benefit'],
            key: 'nameCom',
        },
        {
            title: 'Hình thức làm việc',
            dataIndex: ['job', 'typeJob'],
            key: 'addressCom',
        },
        {
            title: 'Lương',
            dataIndex: ['job', 'salary'],
            key: 'addressCom',
        },
        {
            title: 'Hủy đăng ký',
            key: 'action',
            render: (_: any, record: any) => (
                <Space size="middle">
                    <a><Button style={{ color: 'red', backgroundColor: 'white', border: 'none' }}
                        onClick={() => { actionDel(record.id) }}
                    >X</Button></a>
                </Space>
            ),
        },
    ];

    const [allUserJob, setAllUserJob] = useState()
    const [current, setCurrent] = useState()
    const [pageSize, setPageSize] = useState()
    const [total, setTotal] = useState()
    const fetchAllForThem = async () => {
        const rs = await userViewUserJobTheir(1, 5, accessToken)
        console.log(rs.data.data)
        setAllUserJob(rs.data.data.data)
        setCurrent(rs.data.data.current)
        setPageSize(rs.data.data.limit)
        setTotal(rs.data.data.sumObj)
    }

    useEffect(() => {
        fetchAllForThem()
    }, [])

    const changePage = async (pageNum: number) => {
        const rs = await userViewUserJobTheir(pageNum, 5, accessToken)
        console.log(rs.data.data)
        setAllUserJob(rs.data.data.data)
        setCurrent(rs.data.data.current)
        setPageSize(rs.data.data.limit)
        setTotal(rs.data.data.sumObj)
    }
    return (
        <div style={{ marginTop: '50px' }}>
            <div style={{ height: '375px' }}>
                <Table columns={columns} dataSource={allUserJob} pagination={false} />;
            </div>
            <div style={{ marginTop: '50px' }}>
                <Pagination
                    total={total}
                    showTotal={(total) => `Total ${total} items`}
                    current={current}
                    pageSize={pageSize}
                    align="center"
                    onChange={changePage}
                />
            </div>
            <div style={{ color: 'red' }}>*Lưu ý khi người tuyển dụng đã xác nhận bạn thì bạn không thể hủy bỏ công việc mà bạn đã đăng ký</div>
        </div>
    )
}

export default ViewListRegistered