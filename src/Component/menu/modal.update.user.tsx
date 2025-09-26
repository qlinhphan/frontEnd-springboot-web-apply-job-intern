import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, notification, Select } from 'antd';
import { updateAUser } from '@/apiService/user.api';

interface Iprops {
    isModalOpenUpdate: any,
    showModalUpdate: any,
    setIsModalOpenUpdate: any
    userUpdate: any,
    fetchAllUsersFirst: any
}

const ModalUpdateUser: React.FC<Iprops> = ({ isModalOpenUpdate, showModalUpdate, setIsModalOpenUpdate, userUpdate, fetchAllUsersFirst }) => {

    const [idUser, setIdUser] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [roleId, setRoleId] = useState("")


    const handleOk = async () => {
        // console.log(idUser, email, name, address, roleId)
        try {
            // console.log(idUser, email, name, address, roleId)
            const rs = await updateAUser(idUser, address, name, email, roleId);
            notification.success({
                message: "Hoàn tất",
                description: "Cập nhật người dùng thành công"
            })
            await fetchAllUsersFirst()
            setIsModalOpenUpdate(false);
        } catch (error: any) {
            notification.error({
                message: "Thất bại",
                description: "Cập nhật người dùng thất bại"
            })
        }

    };

    const handleCancel = () => {
        setIsModalOpenUpdate(false);
    };

    useEffect(() => {
        setEmail(userUpdate?.email)
        setName(userUpdate?.name)
        setAddress(userUpdate?.address)
        setRoleId(userUpdate?.role?.id)
        setIdUser(userUpdate?.id)
    }, [userUpdate])

    return (
        <>
            {/* <Button type="primary" onClick={showModalUpdate}>
                Open Modal
            </Button> */}
            <Modal
                title="Sửa thông tin"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpenUpdate}
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
                <div style={{ display: 'flex', gap: '17px' }}>
                    <div style={{ width: '78px' }}>Role:</div>
                    <Select style={{ width: '100%' }} onChange={(value) => { setRoleId(value) }} value={roleId}>
                        <Select.Option value="1">admin</Select.Option>
                        <Select.Option value="3">manager</Select.Option>
                        <Select.Option value="2">user</Select.Option>
                    </Select>
                </div>
                <div style={{ display: 'flex', gap: '17px', marginBottom: '17px' }}>
                    <div style={{ width: '250px', color: "red" }}>1: admin, 2: user, 3: manager</div>

                </div>
            </Modal>

        </>
    );
};

export default ModalUpdateUser;