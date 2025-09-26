import React, { useState } from 'react';
import { Button, Input, Modal, notification, Select } from 'antd';
import { createACompany } from '@/apiService/company.api';

interface Iprops {
    fetchUserTheFirst: any
}
const ModalCreateCompany: React.FC<Iprops> = ({ fetchUserTheFirst }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [leader, setLeader] = useState("")
    const [size, setSize] = useState("")

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        try {
            if (name.length == 0 || address.length == 0 || leader.length == 0 || size.length == 0) {
                alert("Bạn phải điền đầy đủ thông tin")
            }
            const rs = await createACompany(name, address, leader, size)
            notification.success({
                message: "Thao tác thành công",
                description: "Thêm mới công ty thành công"
            })
            setIsModalOpen(false);
            await fetchUserTheFirst()
            setAddress("")
            setLeader("")
            setName("")
            setSize("")
        } catch (error: any) {
            notification.error({
                message: "Thao tác thất bại",
                description: 'Thêm mới công ty thất bại'
            })
        }

        console.log(name, address, leader, size)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setAddress("")
        setLeader("")
        setName("")
        setSize("")
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Thêm mới công ty
            </Button>
            <Modal
                title="Thêm mới một người dùng"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div style={{ display: 'flex', gap: '17px', marginBottom: '17px' }}>
                    <div style={{ width: '78px' }}>Name:</div>
                    <Input onChange={(event) => { setName(event?.target.value) }} value={name}></Input>
                </div>
                <div style={{ display: 'flex', gap: '17px', marginBottom: '17px' }}>
                    <div style={{ width: '78px' }}>Address:</div>
                    <Input onChange={(event) => { setAddress(event?.target.value) }} value={address}></Input>
                </div>
                <div style={{ display: 'flex', gap: '17px', marginBottom: '17px' }}>
                    <div style={{ width: '78px' }}>Leader:</div>
                    <Input onChange={(event) => { setLeader(event?.target.value) }} value={leader}></Input>
                </div>
                <div style={{ display: 'flex', gap: '17px', marginBottom: '17px' }}>
                    <div style={{ width: '78px' }}>Size:</div>
                    <Select style={{ width: '100%' }} onChange={(value) => { setSize(value) }} value={size}>
                        <Select.Option value="medium">medium</Select.Option>
                        <Select.Option value="large">large</Select.Option>
                        <Select.Option value="small">small</Select.Option>
                    </Select>
                </div>
            </Modal>
        </>
    );
};

export default ModalCreateCompany;