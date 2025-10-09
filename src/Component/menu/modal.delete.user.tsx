import React, { useEffect, useState } from 'react';
import { Button, Modal, notification } from 'antd';
import { deleteAUser } from '@/apiService/user.api';
import { useSelector } from 'react-redux';


interface Iprops {
    isModalOpen: any
    setIsModalOpen: any
    userToDel: any
    fetchAllUsersFirst: any
}
const ModalDeleteUser: React.FC<Iprops> = ({ isModalOpen, setIsModalOpen, userToDel, fetchAllUsersFirst }) => {

    const [idUser, setIdUser] = useState("")
    const [email, setEmail] = useState()
    const accessToken = useSelector((state: any) => state.user.info.accessToken)


    const handleOk = async () => {

        // alert(idUser)
        try {
            const rs = await deleteAUser(idUser, accessToken)
            notification.success({
                message: "Thao tác hoàn tất",
                description: "Xóa người dùng thành công"
            })
            setIsModalOpen(false);
            await fetchAllUsersFirst()
        } catch (error) {
            notification.error({
                message: "Thao tác thất bại",
                description: "Xóa người dùng thất bại"
            })
        }


    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        setIdUser(userToDel.id)
        setEmail(userToDel.email)
    }, [userToDel])

    return (
        <>
            {/* <Button type="primary" onClick={showModal}>
                Open Modal
            </Button> */}
            <Modal
                title="Xóa một người dùng"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Bạn có chắc chắn xóa người dùng với id là: <span style={{ color: 'red' }}>{email}</span></p>
            </Modal>
        </>
    );
};

export default ModalDeleteUser;