import { Alert, Pagination } from "antd";
import TableShowAllJob from "./register.user/table.show.all.job";
import { useEffect, useState } from "react";
import { findAllForUser } from "@/apiService/user.page.api";
import { useSelector } from "react-redux";
import ViewDetailJobCom from "./register.user/view.detail.job.com";
import { findByIdJC } from "@/apiService/manager.create.job.comp";

const ResgisterUserPage = () => {
    const introPage = 'Chức năng Đăng ký công việc (Submit Job) cho phép người dùng nộp thông tin công việc cần tuyển dụng hoặc mong muốn ứng tuyển. Người dùng sẽ nhập các dữ liệu như tiêu đề công việc, mô tả chi tiết, kỹ năng yêu cầu, thời gian, mức lương và thông tin liên hệ. Sau khi gửi, hệ thống sẽ lưu lại vào cơ sở dữ liệu, đồng thời hiển thị trong danh sách công việc để quản trị viên hoặc nhà tuyển dụng/ứng viên có thể quản lý, xét duyệt hoặc theo dõi.'

    const [allJobCom, setAllJobCom] = useState([])
    const [current, setCurrent] = useState()
    const [limit, setLimit] = useState()
    const [total, setTotal] = useState()
    const accessToken = useSelector((state: any) => state.user.info.accessToken)

    const changePage = async (pageNumber: number) => {
        const rs = await findAllForUser(pageNumber.toString(), "10", accessToken)
        // console.log(rs.data.data)
        setCurrent(rs.data.data.current)
        setLimit(rs.data.data.limit)
        setTotal(rs.data.data.sumObj)
        setAllJobCom(rs.data.data.data)
    }

    const findAllJobForUser = async () => {
        const rs = await findAllForUser("1", "10", accessToken)
        // console.log(rs.data.data)
        setCurrent(rs.data.data.current)
        setLimit(rs.data.data.limit)
        setTotal(rs.data.data.sumObj)
        setAllJobCom(rs.data.data.data)
    }

    useEffect(() => {
        findAllJobForUser()
    }, [])

    // xem chi tiet job-com
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataJC, setDataJC] = useState({})
    const showModal = async (idJC: number) => {
        setIsModalOpen(true);
        // alert(idJC)
        const rs = await findByIdJC(idJC, accessToken)
        setDataJC(rs.data.data)
    };
    return (
        <div style={{ marginTop: '27px' }}>
            <Alert message={introPage} type="success" />;
            <div>
                <TableShowAllJob allJobCom={allJobCom} showModal={showModal}></TableShowAllJob>
            </div>
            <div style={{ marginTop: '17px' }}>
                <Pagination
                    total={total}
                    showTotal={(total) => `Total ${total} items`}
                    current={current}
                    pageSize={limit}
                    onChange={changePage}
                    align="center"
                />
            </div>
            <div style={{ marginTop: '17px', color: 'red' }}>
                * Bạn có thể click vào từng box để xem chi tiết công việc
            </div>
            <ViewDetailJobCom isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} dataJC={dataJC}></ViewDetailJobCom>
        </div>
    )
}

export default ResgisterUserPage;