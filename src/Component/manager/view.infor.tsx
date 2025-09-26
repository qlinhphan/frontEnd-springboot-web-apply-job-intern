import React, { useEffect, useState } from 'react';
import type { CollapseProps } from 'antd';
import { Card, Collapse } from 'antd';
import { FileSearchOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { findUserByEmailToken } from '@/apiService/user.api';
import { Button, message } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;



const ViewInforYourSelf: React.FC = () => {

    const [addressUser, setAddressUser] = useState("")
    const [emailUser, setEmailUser] = useState("")
    const [nameUser, setNameUser] = useState("")
    const [nameRole, setNameRole] = useState("")
    const [addressCom, setAddressCom] = useState("")
    const [nameCom, setNameCom] = useState("")
    const [leaderCom, setLeaderCom] = useState("")
    const [sizeCom, setSizeCom] = useState("")
    const [countJob, setCountJob] = useState()


    const email = useSelector((state: any) => state.user.info.email);
    const accessToken = useSelector((state: any) => state.user.info.accessToken);

    const findInforUserByEmailForMe = async () => {
        const rs = await findUserByEmailToken(email, accessToken)
        console.log("check DT: ", rs.data.data)
        setAddressUser(rs.data.data.address)
        setEmailUser(rs.data.data.email)
        setNameUser(rs.data.data.name)
        setNameRole(rs.data.data.role.name)
        setAddressCom(rs.data.data.company.address)
        setNameCom(rs.data.data.company.name)
        setLeaderCom(rs.data.data.company.leader)
        setSizeCom(rs.data.data.company.size)
        setCountJob((rs.data.data.jobCompanies).length)
    }

    useEffect(() => {
        findInforUserByEmailForMe()
    }, [])

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Địa chỉ của bạn',
            children: <p>{addressUser}</p>,
        },
        {
            key: '2',
            label: 'Địa chỉ email',
            children: <p>{emailUser}</p>,
        },
        {
            key: '3',
            label: 'Tên đăng ký',
            children: <p>{nameUser}</p>,
        },
        {
            key: '4',
            label: 'Vai trò trong hệ thống',
            children: <p>{nameRole}</p>,
        },
    ];
    const itemsC: CollapseProps['items'] = [
        {
            key: '5',
            label: 'Địa chỉ công ty',
            children: <p>{addressCom}</p>,
        },
        {
            key: '6',
            label: 'Người thành lập',
            children: <p>{leaderCom}</p>,
        },
        {
            key: '7',
            label: 'Tên công ty',
            children: <p>{nameCom}</p>,
        },
        {
            key: '8',
            label: 'Quy mô công ty',
            children: <p>{sizeCom}</p>,
        },
    ];
    const [messageApi, contextHolder] = message.useMessage();

    const info = () => {
        messageApi.info(<div>Số job bạn tạo ra là: {countJob}</div>);
    };
    return (
        <div style={{ width: '96%' }}>
            <div><UserOutlined /> <span style={{ color: 'red' }}>Thông tin người dùng</span></div>
            <div style={{ marginTop: '19px' }}>
                <Collapse accordion items={items} />
            </div>
            <div style={{ marginTop: '38px' }}>
                <FileSearchOutlined /> <span style={{ color: 'red' }}>Thông tin công ty bạn đang làm việc</span>
            </div>
            <div style={{ marginTop: '19px' }}>
                <Collapse accordion items={itemsC} />
            </div>
            <div style={{ marginTop: '30px' }}>
                {contextHolder}
                <Button type="primary" onClick={info}>
                    Click để xem số lượng job bạn tạo
                </Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card title="Thông tin về bạn" variant="borderless" style={{ width: 300, marginTop: '125px' }}>
                    <p>Trên đây là một số thông tin về bạn</p>
                    <p>Bao gồm: tên, địa chị,...</p>
                </Card>
            </div>
        </div>
    )
}

export default ViewInforYourSelf;