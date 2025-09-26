import { useEffect, useState } from "react"
import ModalCreateCompany from "./modal.create.company"
import TableCompany from "./table.company"
import { findAllCompPagi, findCompanyById } from "@/apiService/company.api"
import { Pagination } from "antd"
import ModalUpdateCompany from "./modal.update.company"
import ModalDeleteCompany from "./modal.delete.company"

const ManageCompany = () => {

    const [allUsers, setAllUsers] = useState([])
    const [current, setCurrent] = useState("")
    const [limit, setLimit] = useState("")
    const [total, setTotal] = useState("")

    const fetchUserTheFirst = async () => {
        const rs = await findAllCompPagi("5", "1")
        setAllUsers(rs.data.data.data)
        setCurrent(rs.data.data.current)
        setLimit(rs.data.data.limit)
        setTotal(rs.data.data.sumObj)
    }

    useEffect(() => {
        fetchUserTheFirst()
    }, [])

    const changePage = async (pageNum: any) => {
        const rs = await findAllCompPagi(limit, pageNum)
        setAllUsers(rs.data.data.data)
        setCurrent(rs.data.data.current)
        setLimit(rs.data.data.limit)
        setTotal(rs.data.data.sumObj)
    }

    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
    const [companyUpdate, setCompanyUpdate] = useState({})
    const showModalUpdate = async (id: string) => {
        setIsModalOpenUpdate(true);
        const rs = await findCompanyById(id)
        setCompanyUpdate(rs.data.data)
    };



    const [openDelete, setOpenDelete] = useState(false);
    const [loadingDelete, setLoadingDelete] = useState(true);
    const [companyToDel, setCompanyToDel] = useState({})
    const showLoadingDelete = async (id: string) => {
        const rs = await findCompanyById(id)
        setCompanyToDel(rs.data.data)
        setOpenDelete(true);
        setLoadingDelete(true);
        setTimeout(() => {
            setLoadingDelete(false);
        }, 2000);
    };

    return (
        <div>
            <div className="name-table" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h2>Danh sách công ty</h2>
                    <p style={{ marginTop: '1px' }}><span style={{ color: 'red' }}>*</span>Đây là danh sách công ty đã đăng ký trong hệ thống</p>
                </div>
                <div className="modal-create-user" style={{ marginTop: '23px' }}>
                    <ModalCreateCompany fetchUserTheFirst={fetchUserTheFirst}></ModalCreateCompany>
                </div>
            </div>
            <div style={{ marginTop: '3%' }}>
                <TableCompany allUsers={allUsers} showModalUpdate={showModalUpdate} showLoadingDelete={showLoadingDelete}></TableCompany>
            </div>
            <div style={{ marginTop: '1%' }}>
                <Pagination
                    total={+total}
                    pageSize={+limit}
                    current={+current}
                    onChange={(pageNum) => { changePage(pageNum) }}
                    showTotal={(total) => `Total ${total} items`}
                    align="center"
                ></Pagination>
            </div>
            <div>
                <ModalUpdateCompany isModalOpenUpdate={isModalOpenUpdate} setIsModalOpenUpdate={setIsModalOpenUpdate}
                    companyUpdate={companyUpdate} fetchUserTheFirst={fetchUserTheFirst}
                ></ModalUpdateCompany>
            </div>
            <div>
                <ModalDeleteCompany openDelete={openDelete} setOpenDelete={setOpenDelete} loadingDelete={loadingDelete}
                    companyToDel={companyToDel} fetchUserTheFirst={fetchUserTheFirst}
                ></ModalDeleteCompany>
            </div>
        </div>
    )
}

export default ManageCompany