import React, { useEffect, useState } from 'react';
import { Alert, Button, Form, Input, Modal, Switch } from 'antd';

interface Iprops {
    isModalOpen: any
    setIsModalOpen: any
    dataJC: any
}
const ViewDetailJobCom: React.FC<Iprops> = ({ isModalOpen, setIsModalOpen, dataJC }) => {

    const [form] = Form.useForm()


    const handleOk = () => {
        setIsModalOpen(false);
        form.submit()
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
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
        form.setFieldValue("nameCom", dataJC?.company?.name)
        form.setFieldValue("addressCom", dataJC?.company?.address)
        form.setFieldValue("leader", dataJC?.company?.leader)
        form.setFieldValue("size", dataJC?.company?.size)
        form.setFieldValue('emailAddressCom', dataJC?.company?.addressEmail)
        form.setFieldValue("idJC", dataJC?.id)
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
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        style={{ display: 'none' }}
                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 5px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <div>----- <b>Thông tin công việc</b> -----</div>
                    <Form.Item
                        label="Tên Công việc"
                        name="nameJob"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 5px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item
                        label="Mô tả công việc"
                        name="desc"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item name="active" label="Trạng thái của công việc" valuePropName="checked">
                        <Switch disabled />
                    </Form.Item>
                    <Form.Item
                        label="Yêu cầu công việc"
                        name="requiJob"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item
                        label="Lợi ích"
                        name="bene"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item
                        label="Số lượng tuyển"
                        name="limitApp"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <div>----- <b>Thông tin công ty</b> -----</div>
                    <Form.Item
                        label="Tên công ty"
                        name="nameCom"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 5px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item
                        label="Địa chỉ công ty"
                        name="addressCom"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item
                        label="Leader công ty"
                        name="leader"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item
                        label="Quy mô công ty"
                        name="size"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width: '950px', boxShadow: '5px 5px 9px pink', border: 'none', backgroundColor: 'white', color: 'black' }} disabled />
                    </Form.Item>
                    <Form.Item
                        label="Địa chỉ email của cty - mọi thắc mắc bạn có thể phản hồi tại đây cho chúng tôi"
                        name="emailAddressCom"
                        rules={[{ required: true, message: 'Please input your username!' }]}
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