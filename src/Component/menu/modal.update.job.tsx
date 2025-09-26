import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, notification } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { updateJobById } from '@/apiService/job.api';

interface Iprops {
    isModalOpen: any, setIsModalOpen: any, dataToDo: any, fetchAllJobs: () => void
}
const ModalUpdateJob: React.FC<Iprops> = ({ isModalOpen, setIsModalOpen, dataToDo, fetchAllJobs }) => {

    const [id, setId] = useState("")
    const [nameJob, setNameJob] = useState("")
    const [requireJob, setRequireJob] = useState("")
    const [description, setDescription] = useState("")
    const [benefit, setBenefit] = useState("")

    const handleOk = async () => {

        try {
            const rs = await updateJobById(+id, nameJob, description, requireJob, benefit)
            notification.success({
                message: "Thao tác thành công",
                description: "Cập nhật công ty thành công"
            })
            setIsModalOpen(false);
            fetchAllJobs()
        } catch (error) {
            notification.error({
                message: "Thao tác thất bại",
                description: "Cập nhật công ty thất bại"
            })
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        setId(dataToDo.id)
        setNameJob(dataToDo.nameJob)
        setRequireJob(dataToDo.jobRequire)
        setDescription(dataToDo.description)
        setBenefit(dataToDo.benefit)
    }, [dataToDo])

    return (
        <>
            <Modal
                title="Cập nhật công việc"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div style={{ display: 'flex', gap: '17px', marginBottom: '17px' }}>
                    <div style={{ width: '78px' }}>Tên công việc:</div>
                    <Input onChange={(event) => { setNameJob(event?.target.value) }} value={nameJob}></Input>
                </div>
                <div style={{ display: 'flex', gap: '17px', marginBottom: '17px' }}>
                    <div style={{ width: '78px' }}>Yêu cầu công việc:</div>
                    <Input onChange={(event) => { setRequireJob(event?.target.value) }} value={requireJob}></Input>
                </div>
                <div style={{ display: 'flex', gap: '17px', marginBottom: '17px' }}>
                    <div style={{ width: '78px' }}>Mô tả:</div>
                    <TextArea onChange={(event) => { setDescription(event?.target.value) }} value={description}></TextArea>
                </div>
                <div style={{ display: 'flex', gap: '17px', marginBottom: '17px' }}>
                    <div style={{ width: '78px' }}>Lợi ích:</div>
                    <Input onChange={(event) => { setBenefit(event?.target.value) }} value={benefit}></Input>
                </div>
            </Modal>
        </>
    );
};

export default ModalUpdateJob;