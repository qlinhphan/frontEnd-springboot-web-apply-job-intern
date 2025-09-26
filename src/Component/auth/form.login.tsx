import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Alert, Button, Col, DatePicker, Descriptions, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { DescriptionsProps } from 'antd/lib';
import { LoginApp } from '@/apiService/auth.api';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const FormLogin: React.FC = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'UserName',
            children: 'Zhou Maomao',
        },
        {
            key: '2',
            label: 'Telephone',
            children: '1810000000',
        },
        {
            key: '3',
            label: 'Live',
            children: 'Hangzhou, Zhejiang',
        },
        {
            key: '4',
            label: 'Remark',
            children: 'empty',
        },
        {
            key: '5',
            label: 'Address',
            children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
        },
    ];

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let role = useSelector((state: any) => state.user.info.role)

    const handleLogin = async () => {
        try {
            const rs = await LoginApp(email, password)

            dispatch({
                type: "USER_LOGIN_SUCCESS",
                payload: rs.data.data
            })

            console.log("check role: ", rs.data.data.role)

            if (rs.data.data.role == "admin") {
                navigate("/admin")
            }
            if (rs.data.data.role == 'user') {
                navigate("/")
            }
            if (rs.data.data.role == "manager") {
                navigate("/manager")
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <>
            <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                Bấm vào đây để đăng nhập
            </Button>
            <Drawer
                title="Đăng nhập"
                width={721}
                onClose={onClose}
                open={open}
                styles={{
                    body: {
                        paddingBottom: 80,
                        marginTop: '90px'
                    },
                }}
                extra={
                    <Space>
                        <Button >Nếu bạn chưa có tài khoản, hãy thêm mới</Button>
                        {/* <Button onClick={onClose} type="primary">
                            Submit
                        </Button> */}
                    </Space>
                }
            >
                <Alert message="Bạn phải điền đầy đủ các thông tun trước khi vào hệ thống"></Alert>
                <Form layout="vertical" hideRequiredMark style={{ marginTop: '25px' }}>
                    <Row gutter={16}>
                        <Col span={23}>
                            <Form.Item
                                name="email"
                                label="email"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input placeholder="Please enter user name" value={email} onChange={(event) => { setEmail(event?.target.value) }} />
                            </Form.Item>
                        </Col>
                        <Col span={23}>
                            <Form.Item
                                name="password"
                                label="password"
                                rules={[{ required: true, message: 'Please enter url' }]}
                            >
                                <Input
                                    style={{ width: '100%' }}
                                    // addonBefore="http://"
                                    // addonAfter=".com"
                                    placeholder="Please enter url"
                                    value={password} onChange={(event) => { setPassword(event?.target.value) }}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button type="text" danger onClick={() => { handleLogin() }}>
                        Đăng nhập
                    </Button>
                </div>
                <Descriptions title="Create by" items={items} style={{ boxShadow: '10px 4px 5px rgba(0, 0, 0, 0.5)', marginTop: '104px' }} />;
            </Drawer>

        </>
    );
};

export default FormLogin;