import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Modal, FormProps, Checkbox, InputNumber, notification } from 'antd';
import { findByIdJC } from '@/apiService/manager.create.job.comp';
import { useSelector } from 'react-redux';
import { updateJobById } from '@/apiService/job.api';

interface Iprops {
    isModalOpenUpdate: boolean,
    setIsModalOpenUpdate: any,
    dataJobToEdit: any,
    fetchAllJC: () => void
}

const ModalUpdateJob: React.FC<Iprops> = ({ isModalOpenUpdate, setIsModalOpenUpdate, dataJobToEdit, fetchAllJC }) => {

    const accessToken = useSelector((state: any) => state.user.info.accessToken)


    const handleOk = () => {
        setIsModalOpenUpdate(false);
    };

    const handleCancel = () => {
        setIsModalOpenUpdate(false);
    };

    type FieldType = {
        nameJob: string,
        benefit: string,
        desc: string,
        requireJob: string,
        quality: string
    };

    const [form] = Form.useForm()

    const onFinish: FormProps<FieldType>['onFinish'] = async (values: any) => {
        // console.log('Success:', values.idJob, values.nameJob, values.desc, values.requireJob, values.benefit, values.quality);
        try {
            const rs = await updateJobById(values.idJob, values.nameJob, values.desc, values.requireJob, values.benefit, values.quality, accessToken)
            notification.success({
                message: "Thao tác hoàn tất",
                description: "Cập nhật công việc thành công"
            })
            fetchAllJC()
            setIsModalOpenUpdate(false);
        } catch (error) {
            notification.error({
                message: "Thao tác thất bại",
                description: "Cập nhật công việc thất bại"
            })
        }
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const submitData = () => {
        form.submit()
    }

    useEffect(() => {
        form.setFieldValue("idJob", dataJobToEdit.id)
        form.setFieldValue("nameJob", dataJobToEdit.nameJob)
        form.setFieldValue("desc", dataJobToEdit.description)
        form.setFieldValue("requireJob", dataJobToEdit.jobRequire)
        form.setFieldValue("benefit", dataJobToEdit.benefit)
        form.setFieldValue("quality", dataJobToEdit.limitPeopleForJob)

    }, [dataJobToEdit])





    return (
        <>
            {/* <Button type="primary" onClick={showModal}>
                Open Modal
            </Button> */}
            <Modal
                title="Sửa thông tin công việc"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpenUpdate}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={false}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='vertical'
                    form={form}
                >
                    <Form.Item
                        label="Id cong viec"
                        name="idJob"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        hidden
                    >
                        <Input style={{ width: '477px' }} />
                    </Form.Item>
                    <Form.Item
                        label="Tên công việc"
                        name="nameJob"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width: '477px' }} />
                    </Form.Item>
                    <Form.Item
                        label="lợi ích"
                        name="benefit"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width: '477px' }} />
                    </Form.Item>
                    <Form.Item
                        label="Miêu tả"
                        name="desc"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width: '477px' }} />
                    </Form.Item>
                    <Form.Item
                        label="Yêu cầu ứng viên"
                        name="requireJob"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ width: '477px' }} />
                    </Form.Item>
                    <Form.Item
                        label="Số lượng"
                        name="quality"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <InputNumber style={{ width: '477px' }} />
                    </Form.Item>
                </Form>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button type="primary" danger ghost onClick={submitData}>
                        Danger
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default ModalUpdateJob;