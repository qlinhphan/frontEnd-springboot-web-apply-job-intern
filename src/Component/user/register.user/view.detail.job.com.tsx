import React, { useEffect, useState } from 'react';
import { Alert, Button, Form, Input, Modal, notification, Switch } from 'antd';
import { findByIdJC } from '@/apiService/manager.create.job.comp';
import { useSelector } from 'react-redux';
import { findUserByEmailToken } from '@/apiService/user.api';
import { userRegisterJobForThem } from '@/apiService/user.page.api';

interface Iprops {
    isModalOpen: any
    setIsModalOpen: any
    dataJC: any
}
const ViewDetailJobCom: React.FC<Iprops> = ({ isModalOpen, setIsModalOpen, dataJC }) => {

    const [form] = Form.useForm()

    const accessToken = useSelector((state: any) => state.user.info.accessToken)
    const emailUser = useSelector((state: any) => state.user.info.email)


    const handleOk = () => {
        setIsModalOpen(false);
        form.submit()
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = async (values: any) => {
        // console.log('Success:', values);
        const rs = await findByIdJC(values.idJC, accessToken)
        // console.log("sumOK: ", rs.data.data)
        console.log("idJob: ", rs.data.data.job.id)
        // console.log("emailUser: ", emailUser)

        try {
            const result = await userRegisterJobForThem(rs.data.data.job.id, accessToken);
            notification.success({
                message: "Đăng ký thành công",
                description: "Bạn đã đăng ký job thành công"
            })
        } catch (error: any) {
            notification.error({
                message: "Thất bại",
                description: error?.response?.data?.message
            })
        }

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        form.setFieldValue("nameJob", dataJC?.job?.nameJob)
        form.setFieldValue("desc", dataJC?.job?.description)
        form.setFieldValue("active", dataJC?.job?.active)
        form.setFieldValue("requiJob", dataJC?.job?.jobRequire)
        form.setFieldValue("bene", dataJC?.job?.benefit)
        form.setFieldValue("limitApp", dataJC?.job?.limitPeopleForJob)
        form.setFieldValue("typeJob", dataJC?.job?.typeJob)
        form.setFieldValue("salary", dataJC?.job?.salary)
        form.setFieldValue("nameCom", dataJC?.company?.name)
        form.setFieldValue("addressCom", dataJC?.company?.address)
        form.setFieldValue("leader", dataJC?.company?.leader)
        form.setFieldValue("size", dataJC?.company?.size)
        form.setFieldValue('emailAddressCom', dataJC?.company?.addressEmail)
        form.setFieldValue("idJC", dataJC?.id)

        // console.log("dât: ", dataJC)
    }, [dataJC])

    return (
        <>
            {/* <Button type="primary" onClick={showModal}>
                Open Modal
            </Button> */}
            <Modal
                title="Thông tin chi tiết về công việc"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
            // footer={false}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    form={form}

                >
                    <Form.Item
                        label="ID JC"
                        name="idJC"

                        style={{ display: 'none' }}
                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 5px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <div>----- <b>Thông tin công việc</b> -----</div>
                    <Form.Item
                        label="Tên Công việc"
                        name="nameJob"

                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 5px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item
                        label="Mô tả công việc"
                        name="desc"

                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item name="active" label="Trạng thái của công việc" valuePropName="checked">
                        <Switch disabled />
                    </Form.Item>
                    <Form.Item
                        label="Yêu cầu công việc"
                        name="requiJob"

                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item
                        label="Lợi ích"
                        name="bene"

                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item
                        label="Số lượng tuyển"
                        name="limitApp"

                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item
                        label="Hình thức làm việc"
                        name="typeJob"

                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item
                        label="Tiền lương - Tính bằng $"
                        name="salary"

                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <div>----- <b>Thông tin công ty</b> -----</div>
                    <Form.Item
                        label="Tên công ty"
                        name="nameCom"

                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 5px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item
                        label="Địa chỉ công ty"
                        name="addressCom"

                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item
                        label="Leader công ty"
                        name="leader"

                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item
                        label="Quy mô công ty"
                        name="size"

                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item
                        label="Địa chỉ email của cty - mọi thắc mắc bạn có thể phản hồi tại đây cho chúng tôi"
                        name="emailAddressCom"
                        style={{ width: '950px' }}
                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ViewDetailJobCom;