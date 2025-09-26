import React, { useEffect, useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, notification, Steps } from 'antd';
import { useForm } from 'antd/es/form/Form';
import './updateInfor.scss'
import { useSelector } from 'react-redux';
import { findUserByEmailToken, UpdateUserToken } from '@/apiService/user.api';

type FieldType = {
    username?: string;
    password: string;
    remember?: string;
    email: string,
    names: string,
    address: string,
    id: string,
    roleId: string,
    newPassword: string,
    rewritePassword: string
};



const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};



const UpdateInforManager: React.FC = () => {
    const [form] = Form.useForm()

    const accToken = useSelector((state: any) => state.user.info.accessToken)
    const email = useSelector((state: any) => state.user.info.email)

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        // console.log('Success:', values);
        const { id, roleId, address, names, email, password, newPassword, rewritePassword } = values;

        if (newPassword !== rewritePassword) {
            alert("Bạn phải nhập hai ô password cuối giống nhau")
            return
        }
        try {
            const rs = await UpdateUserToken(id, address, names, email, roleId, password, newPassword, accToken)
            notification.success({
                message: "Cập nhật hoàn tất",
                description: "Bạn đã cập nhật tài khoản thành công"
            })
        } catch (error: any) {
            notification.error({
                message: "Cập nhật thất bại",
                description: error.response.data.message
            })
        }
    };
    const submitData = () => {
        form.submit()
    }

    const [currentStep, setCurrentStep] = useState(0)
    const changeStep = (value: number) => {
        setCurrentStep(value)
    }
    const description = 'This is a description.';

    const fetchUserByEmail = async () => {
        const rs = await findUserByEmailToken(email, accToken)
        console.log(rs.data.data)
        form.setFieldValue("address", rs.data.data.address)
        form.setFieldValue("email", rs.data.data.email)
        form.setFieldValue("names", rs.data.data.name)
        // form.setFieldValue("password", rs.data.data.password)
        form.setFieldValue("id", rs.data.data.id)
        form.setFieldValue('roleId', rs.data.data.role.id)
    }

    useEffect(() => {
        fetchUserByEmail()
    }, [])
    return (
        <div className='manager-update-infor' style={{
            width: '96%', height: '500px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'

        }}>
            <Form
                name="basic"
                labelCol={{ span: 16 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form}
                layout='vertical'
            >
                <Form.Item
                    label="Id"
                    name="id"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    hidden
                >
                    <Input style={{ width: '500px' }} />
                </Form.Item>
                <Form.Item
                    label="roleId"
                    name="roleId"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    hidden
                >
                    <Input style={{ width: '500px' }} />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Address"
                    name="address"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input style={{ width: '500px' }} />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input style={{ width: '500px' }} />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Name"
                    name="names"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input style={{ width: '500px' }} />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password style={{ width: '500px' }} placeholder='Write current password at here...' />
                </Form.Item>
                <Form.Item<FieldType>
                    label="New Password"
                    name="newPassword"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password style={{ width: '500px' }} />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Rewrite Password"
                    name="rewritePassword"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password style={{ width: '500px' }} />
                </Form.Item>


                <Button danger onClick={submitData}>Xác nhận</Button>
            </Form>
            <div>
                <ol>
                    <li>
                        <div className="step-title">Nhập địa chỉ</div>
                        <div className="step-desc">Điền chính xác nơi bạn đang sinh sống để hệ thống ghi nhận thông tin.</div>
                    </li>
                    <li>
                        <div className="step-title">Nhập email</div>
                        <div className="step-desc">Cung cấp email đang sử dụng để nhận thông báo và hỗ trợ.</div>
                    </li>
                    <li>
                        <div className="step-title">Nhập họ tên</div>
                        <div className="step-desc">Gõ đầy đủ họ và tên để đảm bảo danh tính rõ ràng.</div>
                    </li>
                    <li>
                        <div className="step-title">Tạo mật khẩu</div>
                        <div className="step-desc">Đặt mật khẩu bảo mật, ít nhất 8 ký tự, nên có chữ hoa, số và ký tự đặc biệt.</div>
                    </li>
                    <li>
                        <div className="step-title">Xác nhận thông tin</div>
                        <div className="step-desc">Kiểm tra lại toàn bộ dữ liệu và nhấn <strong>Xác nhận</strong> để hoàn tất.</div>
                    </li>
                </ol>
            </div>
        </div >
    )
}

export default UpdateInforManager;