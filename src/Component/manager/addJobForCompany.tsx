import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, InputNumber, notification, Row, Select, Space } from 'antd';
import imgs from '../../assets/enty-level-IT_1500x680.png'
import { createJobCom } from '@/apiService/manager.create.job.comp';
import { useSelector } from 'react-redux';
import { findUserByEmailToken } from '@/apiService/user.api';

const { Option } = Select;
// "descriptionJob": "desasfrg",
//     "requireJob": "requide asgf",
//     "benefitJob": "benenene",
//     "limitPeopleForJob": 10,
//     "nameComp": "abc como new ok",
//     "addressComp": "addressCOmpany",
//     "leaderComp": "mr afd",
//     "sizeComp": "large"
const AddJobForCompany: React.FC = () => {
    const [open, setOpen] = useState(false);

    const accToken = useSelector((state: any) => state.user.info.accessToken)
    const email = useSelector((state: any) => state.user.info.email)

    const [nameJob, setNameJob] = useState("")
    const [descriptionJob, setDescriptionJob] = useState("")
    const [requireJob, setRequireJob] = useState("")
    const [benefitJob, setBenefitJob] = useState("")
    const [limitPeopleForJob, setLimitPeopleForJob] = useState<number>(0)
    const [nameComp, setNameComp] = useState("")
    const [addressComp, setAddressComp] = useState("")
    const [leaderComp, setLeaderComp] = useState("")
    const [sizeComp, setSizeComp] = useState("")

    const [form] = Form.useForm()



    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        // alert("hi");
        setNameJob("")
        setDescriptionJob("")
        setRequireJob("")
        setBenefitJob("")
        setLimitPeopleForJob(0)
        setNameComp("")
        setAddressComp("")
        setLeaderComp("")
        setSizeComp("")
    };
    const fetCompanyOfUser = async () => {
        const rs = await findUserByEmailToken(email, accToken)
        // setNameComp(rs.data.data.company.name)
        form.setFieldValue("nameComp", rs.data.data.company.name)
        setAddressComp(rs.data.data.company.address)
        setLeaderComp(rs.data.data.company.leader)
        setSizeComp(rs.data.data.company.size)
        console.log(rs.data.data.company.name)
    }

    useEffect(() => {
        fetCompanyOfUser()
    }, [])

    const submitData = async () => {
        console.log("nameJ: ", nameJob)
        console.log("desJ:", descriptionJob)
        console.log("reqJ: ", requireJob)
        console.log("beneJ: ", benefitJob)
        console.log("limit: ", limitPeopleForJob)

        try {
            const rs = await createJobCom(nameJob, descriptionJob, requireJob, benefitJob, limitPeopleForJob, accToken)
            notification.success({
                message: "Thao tác hoàn tất",
                description: "Thêm mới công việc thành công"
            })
            onClose()
        } catch (error: any) {
            notification.error({
                message: "Thao tác thất bại",
                description: "Thêm mới công việc thất bại"
            })
        }
    }



    return (
        <div style={{ background: 'linear-gradient(90deg, #2563EB, #8B5CF6, #F59E0B)', width: '96%', height: '500px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />} style={{ backgroundColor: '#F59E0B' }}>
                Thêm mới công việc
            </Button>
            <Drawer
                title="Thêm mới một công việc"
                width={720}
                onClose={onClose}
                open={open}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
                extra={
                    <Space>
                        {/* <Button onClick={onClose}>Cancel</Button> */}
                        <Button onClick={submitData} type="primary">
                            Submit
                        </Button>
                    </Space>
                }
            >
                <Form layout="vertical" hideRequiredMark form={form}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="nameJob"
                                label="Tên công việc"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input placeholder="Please enter user name" value={nameJob} onChange={(event) => { setNameJob(event.target.value) }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="bene"
                                label="Lợi ích của ứng viên"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input placeholder="Please enter user name" onChange={(event) => { setBenefitJob(event.target.value) }} value={benefitJob} />
                            </Form.Item>
                        </Col>

                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="requi"
                                label="Yêu cầu của công việc"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input placeholder="Please enter user name" value={requireJob} onChange={(event) => { setRequireJob(event.target.value) }} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="description"
                                label="Miêu tả về công việc"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter url description',
                                    },
                                ]}
                            >
                                <Input.TextArea rows={4} placeholder="please enter url description"
                                    value={descriptionJob} onChange={(event) => { setDescriptionJob(event.target.value) }}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="limited"
                                label="Số lượng tuyển"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter url description',
                                    },
                                ]}
                            >
                                <InputNumber placeholder="please enter url description" style={{ width: '660px' }}
                                    value={limitPeopleForJob} onChange={(value) => { setLimitPeopleForJob(value ?? 0) }}
                                />
                            </Form.Item>
                        </Col>

                    </Row>

                    <hr style={{ color: 'red' }}></hr>

                    {/* <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="nameCom"
                                label="Tên công ty"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input placeholder="Please enter user name" value={nameComp} onChange={(event) => setNameComp(event.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="addComp"
                                label="Địa chỉ công ty"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input placeholder="Please enter user name" value={addressComp} onChange={(event) => { setAddressComp(event.target.value) }} />
                            </Form.Item>
                        </Col>

                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="leaderComp"
                                label="Leader"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input placeholder="Please enter user name" value={leaderComp} onChange={(event) => { setLeaderComp(event.target.value) }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="sizeComp"
                                label="Kích cỡ công ty"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Select placeholder="Please select an owner" value={sizeComp} onChange={(value) => { setSizeComp(value) }}>
                                    <Option value="medium">Medium</Option>
                                    <Option value="large">Small</Option>
                                    <Option value="small">Large</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                    </Row> */}
                </Form>
            </Drawer>
            <div style={{}}>
                <h1>Thêm mới công việc dễ dàng, nhanh chóng!</h1>
                <h3 style={{ marginTop: '15px' }}>Giúp ứng viên tiếp cận thông tin tuyển dụng chính xác.</h3>
                <p style={{ marginTop: '10px' }}>Quản lý và cập nhật công việc chỉ với vài thao tác.</p>
            </div>
        </div>
    );
};

export default AddJobForCompany;