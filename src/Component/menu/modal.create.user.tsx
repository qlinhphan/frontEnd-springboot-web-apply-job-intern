import React, { useState } from 'react';
import { Button, Form, Input, Modal, notification, Select } from 'antd';
import axios from 'axios';
import { createAUser } from '@/apiService/user.api';

interface Iprops {
    fetchAllUsersFirst: () => void
}

const ModalCreateUser: React.FC<Iprops> = ({ fetchAllUsersFirst }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [roleId, setRoleId] = useState("")

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        try {
            const res = await createAUser(email, name, address, password, roleId)
            notification.success({
                message: "Hoàn tất",
                description: "Thêm mới user thành công"
            })
            await fetchAllUsersFirst()
            setIsModalOpen(false);
            setAddress("")
            setEmail("")
            setName("")
            setRoleId("")
            setPassword("")
        } catch (error: any) {
            console.log(error.response)
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setAddress("")
        setEmail("")
        setName("")
        setRoleId("")
        setPassword("")
    };




    return (
        <>
            <Button type="primary" onClick={showModal}>
                Thêm mới người dùng
            </Button>
            <Modal
                title="Thêm mới một người dùng"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div style={{ display: 'flex', gap: '17px', marginBottom: '17px' }}>
                    <div style={{ width: '78px' }}>Email:</div>
                    <Input onChange={(event) => { setEmail(event?.target.value) }} value={email}></Input>
                </div>
                <div style={{ display: 'flex', gap: '17px', marginBottom: '17px' }}>
                    <div style={{ width: '78px' }}>Name:</div>
                    <Input onChange={(event) => { setName(event?.target.value) }} value={name}></Input>
                </div>
                <div style={{ display: 'flex', gap: '17px', marginBottom: '17px' }}>
                    <div style={{ width: '78px' }}>Address:</div>
                    <Input onChange={(event) => { setAddress(event?.target.value) }} value={address}></Input>
                </div>
                <div style={{ display: 'flex', gap: '17px', marginBottom: '17px' }}>
                    <div style={{ width: '78px' }}>Password:</div>
                    <Input onChange={(event) => { setPassword(event?.target.value) }} value={password}></Input>
                </div>
                <div style={{ display: 'flex', gap: '17px', marginBottom: '17px' }}>
                    <div style={{ width: '78px' }}>Role:</div>
                    <Select style={{ width: '100%' }} onChange={(value) => { setRoleId(value) }} value={roleId}>
                        <Select.Option value="1">admin</Select.Option>
                        <Select.Option value="3">manager</Select.Option>
                        <Select.Option value="2">user</Select.Option>
                    </Select>
                </div>
            </Modal>
        </>
    );
};

export default ModalCreateUser;

