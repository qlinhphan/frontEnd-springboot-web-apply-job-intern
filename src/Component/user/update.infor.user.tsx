import React, { useState } from 'react';
import { Button, Card, Flex, Typography } from 'antd';
import ModalUpdateUser from '../menu/modal.update.user';
import ModalUpdateUserPage from './update.infor.user/modal.update.user';

const cardStyle: React.CSSProperties = {
    width: 620,
};

const imgStyle: React.CSSProperties = {
    display: 'block',
    width: 273,
};

const UpdateInfor: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    return (
        <div style={{ height: '500px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
            <div style={{ height: '280px', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
                    <Flex justify="space-between">
                        <img
                            draggable={false}
                            alt="avatar"
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            style={imgStyle}
                        />
                        <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>
                            <Typography.Title level={3}>
                                “antd is an enterprise-class UI design language and React UI library.”
                            </Typography.Title>
                            <Typography.Title level={5}>
                                “antd is an enterprise-class UI design language and React UI library.”
                            </Typography.Title>
                            <Button type="primary" onClick={() => showModal()}>
                                Cập nhật thông tin
                            </Button>
                        </Flex>
                    </Flex>
                </Card>
                <ModalUpdateUserPage isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} ></ModalUpdateUserPage>
            </div>
        </div>
    )
}

export default UpdateInfor;