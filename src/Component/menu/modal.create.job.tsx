import { createAJob } from "@/apiService/job.api";
import { Button, Input, Modal, notification, Select } from "antd"
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

interface Iprops {
    fetchAllJobs: () => void
}
const ModalCreateJob: React.FC<Iprops> = ({ fetchAllJobs }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nameJob, setNameJob] = useState("")
    const [requireJob, setRequireJob] = useState("")
    const [description, setDescription] = useState("")
    const [benefit, setBenefit] = useState("")

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = async () => {

        try {
            const rs = await createAJob(nameJob, description, requireJob, benefit)
            notification.success({
                message: "Thao tác hoàn tất",
                description: "Thêm mới công việc thành công"
            })
            setIsModalOpen(false);
            await fetchAllJobs()
        } catch (error) {
            notification.error({
                message: "Thao tác thất bại",
                description: "Thêm mới người dùng thất bại"
            })
        }

    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <Button type="primary" onClick={showModal}>
                Thêm mới công việc
            </Button>
            <Modal
                title="Thêm mới một công việc"
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
    )
}

export default ModalCreateJob