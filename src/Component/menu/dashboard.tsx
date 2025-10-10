import { CheckCircleOutlined } from "@ant-design/icons"
import BarRegisteredMonth from "./bar.registered.month"
import CardDashboard from "./card.dashboard"
import { useEffect, useState } from "react"
import { dataForDash } from "@/apiService/data.dashboard.api"
import { useSelector } from "react-redux"

const Dashboard = () => {
    const accessToken = useSelector((state: any) => state.user.info.accessToken)
    const [dataDash, setDataDash] = useState()

    const fetchDataDash = async () => {
        const rs = await dataForDash(accessToken)
        setDataDash(rs.data.data)
    }

    useEffect(() => {
        fetchDataDash()
    }, [])

    return (
        <>
            <div>
                <h2>Một số thống kê</h2>
            </div>
            <div style={{ marginTop: '3%', width: '99%' }}>
                <CardDashboard dataDash={dataDash}></CardDashboard>
            </div>
            {/* <div style={{ marginTop: '5%' }}>
                <p><CheckCircleOutlined style={{ color: 'red' }} /> Số lượng công việc mới trong 12 tháng</p>
            </div>
            <div style={{ marginTop: '1%' }}>
                <BarRegisteredMonth></BarRegisteredMonth>
            </div> */}
        </>

    )
}

export default Dashboard