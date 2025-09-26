import React, { useEffect, useState } from 'react';
import { Alert, Button, Modal, notification } from 'antd';
import { deleteJobById } from '@/apiService/job.api';

interface Iprops {
    isModalOpenDel: any, setIsModalOpenDel: any, dataToDoDel: any,
    fetchAllJobs: () => void
}

const ModalDeleteJob: React.FC<Iprops> = ({ isModalOpenDel, setIsModalOpenDel, dataToDoDel, fetchAllJobs }) => {

    const [id, setId] = useState("")

    const handleOk = async () => {

        try {
            const rs = await deleteJobById(id)
            notification.info({
                message: "Thao tác thành công",
                description: "Xóa công ty thành công"
            })
            setIsModalOpenDel(false);
            fetchAllJobs()
        } catch (error) {
            notification.error({
                message: "Thao tác thất bại",
                description: "Xóa công ty thất bại"
            })
        }
    };

    const handleCancel = () => {
        setIsModalOpenDel(false);
    };

    useEffect(() => {
        setId(dataToDoDel.id)
    }, [dataToDoDel])

    return (
        <>
            <Modal
                title="Bạn chắc chắn muốn xóa công việc?"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpenDel}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Bạn có chắc chắn muốn xóa công việc với mã là: <span style={{ color: 'red' }}>{id}</span></p>
            </Modal>
        </>
    );
};

export default ModalDeleteJob;