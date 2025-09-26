import { useEffect, useState } from "react"
import TableJob from "./table.job"
import { findAllJobHasPage, findJobById } from "@/apiService/job.api"
import { Pagination } from "antd"
import ModalCreateJob from "./modal.create.job"
import ModalUpdateJob from "./modal.update.job"
import ModalDeleteJob from "./modal.delete.job"

const ManagerJob = () => {

    const [allJobs, setAllJobs] = useState([])
    const [total, setTotal] = useState("")
    const [limit, setlimit] = useState("")
    const [current, setCurrent] = useState("")
    const fetchAllJobs = async () => {
        const rs = await findAllJobHasPage("1", "5")
        setAllJobs(rs.data.data.data)
        setTotal(rs.data.data.sumObj)
        setlimit(rs.data.data.limit)
        setCurrent(rs.data.data.current)
    }

    useEffect(() => {
        fetchAllJobs()
    }, [])

    const changePage = async (pageNumber: number) => {
        const rs = await findAllJobHasPage(pageNumber.toString(), "5")
        setAllJobs(rs.data.data.data)
        setTotal(rs.data.data.sumObj)
        setlimit(rs.data.data.limit)
        setCurrent(rs.data.data.current)
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataToDo, setDataToDo] = useState({})
    const showModal = async (id: number) => {
        const rs = await findJobById(id);
        setDataToDo(rs.data.data)
        setIsModalOpen(true);
    };

    const [isModalOpenDel, setIsModalOpenDel] = useState(false);
    const [dataToDoDel, setDataToDoDel] = useState({})
    const showModalDel = async (id: number) => {
        const rs = await findJobById(id);
        setDataToDoDel(rs.data.data)
        setIsModalOpenDel(true);
    };

    return (
        <div className="manager-cv">
            <div className="name-table" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>Danh sách công việc:</h2>
                <div className="modal-create-user" style={{ marginTop: '23px' }}>
                    <ModalCreateJob fetchAllJobs={fetchAllJobs}></ModalCreateJob>
                </div>

            </div>
            <div style={{ marginTop: '5%' }}>
                <TableJob allJobs={allJobs} showModal={showModal} showModalDel={showModalDel}></TableJob>
                <div style={{ marginTop: '3%' }}>
                    <Pagination
                        align="center"
                        total={+total}
                        current={+current}
                        pageSize={+limit}
                        showTotal={(total) => `Total ${total} items`}
                        onChange={changePage}
                    />
                </div>
            </div>
            <div>
                <ModalUpdateJob isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} dataToDo={dataToDo}
                    fetchAllJobs={fetchAllJobs}
                ></ModalUpdateJob>
            </div>
            <div>
                <ModalDeleteJob isModalOpenDel={isModalOpenDel} setIsModalOpenDel={setIsModalOpenDel} dataToDoDel={dataToDoDel}
                    fetchAllJobs={fetchAllJobs}
                ></ModalDeleteJob>
            </div>

        </div >
    )
}

export default ManagerJob