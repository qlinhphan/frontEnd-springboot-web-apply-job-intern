import { CheckCircleOutlined } from "@ant-design/icons"
import BarRegisteredMonth from "./bar.registered.month"
import CardDashboard from "./card.dashboard"

const Dashboard = () => {
    return (
        <>
            <div>
                <h2>Dashboard</h2>
            </div>
            <div style={{ marginTop: '3%', width: '99%' }}>
                <CardDashboard></CardDashboard>
            </div>
            <div style={{ marginTop: '5%' }}>
                <p><CheckCircleOutlined style={{ color: 'red' }} /> Số lượng công việc mới trong 12 tháng</p>
            </div>
            <div style={{ marginTop: '1%' }}>
                <BarRegisteredMonth></BarRegisteredMonth>
            </div>
        </>

    )
}

export default Dashboard