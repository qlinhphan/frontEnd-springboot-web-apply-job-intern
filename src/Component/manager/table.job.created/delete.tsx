import React, { useEffect, useState } from 'react';
import { Alert, Button, Modal, notification } from 'antd';
import { useSelector } from 'react-redux';
import { deleteJobById } from '@/apiService/job.api';
import { deleteJCByJob } from '@/apiService/manager.create.job.comp';
interface Iprops {
    isModalOpenDelete: any,
    setIsModalOpenDelete: any,
    dataJobToDel: any,
    fetchAllJC: () => void
}
const ModalDeleteJob: React.FC<Iprops> = ({ isModalOpenDelete, setIsModalOpenDelete, dataJobToDel, fetchAllJC }) => {
    const [idJob, setIdJob] = useState("")
    const accessToken = useSelector((state: any) => state.user.info.accessToken)

    const handleOk = async () => {
        setIsModalOpenDelete(false);
        try {
            const rs = await deleteJCByJob(+idJob, accessToken)
            notification.info({
                message: "Thao tác hoàn tất",
                description: "Xóa công việc thành công"
            })
            fetchAllJC()
            setIsModalOpenDelete(false);
        } catch (error) {
            notification.error({
                message: "Thao tác thất bại",
                description: "Xóa công việc thất bại"
            })
        }
    };

    const handleCancel = () => {
        setIsModalOpenDelete(false);
    };

    useEffect(() => {
        setIdJob(dataJobToDel.id)
    }, [dataJobToDel])

    return (
        <>
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpenDelete}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Alert
                    message={<div>Bạn có chắc chắn muốn xóa công việc với id là: <span style={{ color: 'red' }}>{idJob}</span></div>}
                    type="warning"
                />
            </Modal>
        </>
    );
};

export default ModalDeleteJob;