import { useEffect, useState } from "react"
import TableUser from "./table.user"
import axios from 'axios';
import { Pagination } from "antd";
import ModalCreateUser from "./modal.create.user";
import ModalUpdateUser from "./modal.update.user";
import { findUserById } from "@/apiService/user.api";
import ModalDeleteUser from "./modal.delete.user";
import { useSelector } from "react-redux";

const ManageUser = () => {

    const [allUsers, setAllUsers] = useState([])  // danh sach users khi phan trang
    const [sumObj, setSumObj] = useState()
    const [pages, setPages] = useState()
    const [current, setCurrent] = useState()
    const accessToken = useSelector((state: any) => state.user.info.accessToken)

    const [userUpdate, setUserUpdate] = useState({})  // nguoi dung muon sua
    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
    const showModalUpdate = async (id: string) => {
        setIsModalOpenUpdate(true);
        // alert(id)

        try {
            const rs = await findUserById(id, accessToken)
            // console.log(rs.data.data)
            setUserUpdate(rs.data.data)
        } catch (error: any) {
            console.log(error.response)
        }
    };


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userToDel, setUserToDel] = useState({})
    const showModal = async (id: string) => {
        setIsModalOpen(true);
        try {
            const rs = await findUserById(id, accessToken)
            // console.log(rs.data.data)
            setUserToDel(rs.data.data)
        } catch (error: any) {
            console.log(error.response)
        }
    };



    const fetchAllUsersFirst = async () => {
        try {
            const response = await axios.get(`http://localhost:8017/user/haspage?current=${1}&limit=${5}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setAllUsers(response.data.data.data)
            setSumObj(response.data.data.sumObj)
            setPages(response.data.data.pages)
            setCurrent(response.data.data.current)
            // console.log(response.data.data.data)
        } catch (error: any) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        fetchAllUsersFirst()
    }, [])

    const ChangePage = async (pageNumber: number) => {
        try {
            const response = await axios.get(`http://localhost:8017/user/haspage?current=${pageNumber}&limit=${5}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setAllUsers(response.data.data.data)
            setSumObj(response.data.data.sumObj)
            setPages(response.data.data.pages)
            setCurrent(response.data.data.current)
            console.log(response.data.data.data)
        } catch (error: any) {
            console.log(error.response)
        }
    }

    return (
        <div className="content-manage-user">
            <div className="name-table" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>Danh sách người dùng:</h2>
                <div className="modal-create-user" style={{ marginTop: '23px' }}>
                    <ModalCreateUser fetchAllUsersFirst={fetchAllUsersFirst}></ModalCreateUser>
                </div>
            </div>
            <div className="table-user" style={{ marginTop: '5%' }}>
                <TableUser allUsers={allUsers} setAllUsers={setAllUsers} showModalUpdate={showModalUpdate} showModal={showModal}
                ></TableUser>

                <div style={{ marginTop: '3%' }}>
                    <Pagination
                        total={sumObj}
                        showTotal={(total) => `Total ${total} items`}
                        current={current}
                        pageSize={5}
                        align='center'
                        onChange={ChangePage}
                    />
                </div>
            </div>
            <ModalUpdateUser isModalOpenUpdate={isModalOpenUpdate} showModalUpdate={showModalUpdate}
                setIsModalOpenUpdate={setIsModalOpenUpdate} userUpdate={userUpdate} fetchAllUsersFirst={fetchAllUsersFirst}
            ></ModalUpdateUser >
            <ModalDeleteUser isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} userToDel={userToDel} fetchAllUsersFirst={fetchAllUsersFirst}></ModalDeleteUser>
        </div>
    )
}

export default ManageUser