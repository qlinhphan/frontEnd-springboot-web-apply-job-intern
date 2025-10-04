import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, notification } from 'antd';
import { findUserByEmailToken, UpdateUserToken } from '@/apiService/user.api';
import { useSelector } from 'react-redux';
import Password from 'antd/es/input/Password';

interface Iprops {
    isModalOpen: any,
    setIsModalOpen: any
}

const ModalUpdateUserPage: React.FC<Iprops> = ({ isModalOpen, setIsModalOpen }) => {

    const email = useSelector((state: any) => state.user.info.email)
    const token = useSelector((state: any) => state.user.info.accessToken)

    const [form] = Form.useForm();

    const handleOk = () => {
        // setIsModalOpen(false);
        form.submit()
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = async (values: any) => {
        // setIsModalOpen(false);
        console.log('Success:', values);
        if (form.getFieldValue("currentPass") == null) {
            console.log("Ban chua nhap mk")
            notification.error({
                message: "Sai thong tin",
                description: "Ban chua nhap mat khau hien tai"
            })
            return;
        }
        if (form.getFieldValue("newPass") !== form.getFieldValue("reNewPass")) {
            console.log("Nhập lại mk xác nhận")
            notification.error({
                message: "Sai thong tin",
                description: "mat khau nhap lai khong dung"
            })
            return
        }

        const id = form.getFieldValue("id")
        const address = form.getFieldValue("address")
        const email = form.getFieldValue("email")
        const name = form.getFieldValue("yourName")
        const roleId = form.getFieldValue("roleId")
        const currentPass = form.getFieldValue("currentPass")
        const newPass = form.getFieldValue("newPass")

        try {
            const rs = await UpdateUserToken(id, address, name, email, roleId, currentPass, newPass, token)
            notification.success({
                message: 'Thao tac thanh cong',
                description: 'Cap nhat nguoi dung hoan tat'
            })
            setIsModalOpen(false);
            form.setFieldValue("currentPass", null)
            form.setFieldValue("newPass", null)
            form.setFieldValue("reNewPass", null)
        } catch (error) {
            notification.error({
                message: 'Thao tac that bai',
                description: 'Cap nhat nguoi dung that bai'
            })
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const findUserByEmail = async () => {
        const rs = await findUserByEmailToken(email, token);
        console.log(rs.data.data)
        form.setFieldValue("id", rs?.data?.data?.id)
        form.setFieldValue("address", rs?.data?.data?.address)
        form.setFieldValue("yourName", rs?.data?.data?.name)
        form.setFieldValue("email", rs?.data?.data?.email)
        form.setFieldValue("roleId", rs?.data?.data?.role?.id)
    }

    useEffect(() => {
        findUserByEmail()
    }, [])

    return (
        <>
            <Modal
                title="Cập nhật thông tin của bạn"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 780 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item
                        label="id user"
                        name="id"
                        hidden
                    >

                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="roleId"
                        name="roleId"
                        hidden
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Địa chỉ"
                        name="address"

                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Tên của bạn"
                        name="yourName"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu hiện tại - Bạn hãy nhập"
                        name="currentPass"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Nhập mật khẩu mới"
                        name="newPass"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Nhập lại mật khẩu mới"
                        name="reNewPass"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ModalUpdateUserPage;