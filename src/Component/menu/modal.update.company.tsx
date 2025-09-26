import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, notification, Select } from 'antd';
import { updateCompanyById } from '@/apiService/company.api';

interface Iprops {
    isModalOpenUpdate: any,
    setIsModalOpenUpdate: any
    companyUpdate: any
    fetchUserTheFirst: () => void
}

const ModalUpdateCompany: React.FC<Iprops> = ({ isModalOpenUpdate, setIsModalOpenUpdate, companyUpdate, fetchUserTheFirst }) => {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [leader, setLeader] = useState("")
    const [size, setSize] = useState("")

    const handleOk = async () => {
        try {
            const rs = await updateCompanyById(id, name, address, leader, size)
            notification.success({
                message: "Thao tác hoàn tất",
                description: 'Cập nhật công ty hoàn tất'
            })
            setIsModalOpenUpdate(false);
            await fetchUserTheFirst()
        } catch (error: any) {
            notification.error({
                message: "Thao tác thất bại",
                description: "Cập nhật công ty thất bại"
            })
            console.log("er: ", error?.response?.data)
        }

    };

    const handleCancel = () => {
        setIsModalOpenUpdate(false);
    };

    useEffect(() => {
        setId(companyUpdate.id)
        setName(companyUpdate.name)
        setAddress(companyUpdate.address)
        setLeader(companyUpdate.leader)
        setSize(companyUpdate.size)
    }, [companyUpdate])

    return (
        <>
            <Modal
                title="Cập nhật thông tin công ty"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpenUpdate}
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

export default ModalUpdateCompany;