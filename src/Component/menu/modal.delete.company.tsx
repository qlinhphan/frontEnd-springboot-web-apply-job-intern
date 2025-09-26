import React, { useEffect, useState } from 'react';
import { Button, Modal, notification } from 'antd';
import { deleteCompany } from '@/apiService/company.api';

interface Iprops {
    openDelete: any,
    setOpenDelete: any, loadingDelete: any, companyToDel: any, fetchUserTheFirst: () => void
}

const ModalDeleteCompany: React.FC<Iprops> = ({ openDelete, setOpenDelete, loadingDelete, companyToDel, fetchUserTheFirst }) => {

    const [id, setId] = useState("")

    useEffect(() => {
        setId(companyToDel.id)
    }, [companyToDel])

    const submitDeleteData = async () => {
        try {
            const rs = await deleteCompany(id)
            notification.info({
                message: "Thao tác hoàn tất",
                description: "Xóa người dùng thành công"
            })
            setOpenDelete(false)
            await fetchUserTheFirst()
        } catch (error) {
            notification.error({
                message: "thao tác thất bại",
                description: "Xóa người dùng thất bại"
            })
        }
    }

    return (
        <>
            {/* <Button type="primary" onClick={showLoading}>
                Open Modal
            </Button> */}
            <Modal
                title={<p>Bạn muốn xóa công ty?</p>}
                footer={
                    <Button type="primary" onClick={submitDeleteData}>
                        Xóa
                    </Button>
                }
                loading={loadingDelete}
                open={openDelete}
                onCancel={() => setOpenDelete(false)}
            >
                <p>Bạn có chắc chắn muốn xóa một công ty với mã là: <span style={{ color: 'red' }}>{id}</span></p>
            </Modal>
        </>
    );
};

export default ModalDeleteCompany;