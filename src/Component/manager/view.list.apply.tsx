import { managerOkAppliedForYou, managerViewWhoApplied } from "@/apiService/manager.create.job.comp"
import { Button, Card, notification } from "antd"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const ViewListApply = () => {

    const accessToken = useSelector((state: any) => state.user.info.accessToken)

    const [data, setData] = useState([])

    const fetchAllData = async () => {
        const rs = await managerViewWhoApplied(accessToken)
        setData(rs?.data.data)
        console.log(rs.data.data)
    }

    useEffect(() => {
        fetchAllData()
    }, [])

    const AppliedSuccess = async (email: string, idJob: number) => {
        try {
            const rs = await managerOkAppliedForYou(email, idJob.toString(), accessToken)
            notification.success({
                message: 'Thao tác thành công',
                description: 'Bạn đã tuyển người này'

            })
            fetchAllData()
        } catch (error) {

        }

    }
    return (
        <div style={{ width: '96%', display: 'flex', gap: '45px', flexWrap: 'wrap' }}>
            {
                data.map((d: any) => {
                    return (
                        <Card title={`Email: ${d.user.email}`} variant="borderless" style={{ width: '319px', boxShadow: '3px 3px 5px black' }}>
                            <p>Mã Công việc ứng tuyển: <span color="red">{d.job.id}</span></p>
                            <p>Tên công việc ứng tuyển: <span color="red">{d.job.nameJob}</span></p>
                            <p>Tên người ứng tuyển: <span >{d.user.name}</span></p>
                            <p>Tuổi người ứng tuyển: <span color="red">{d.user.age}</span></p>
                            <div style={{ marginTop: '10%' }}>
                                {
                                    d.allowDel === true ? <Button type="primary" danger ghost onClick={() => { AppliedSuccess(d.user.email, d.job.id) }}>
                                        Tuyển người này...
                                    </Button> : <Button type="primary" danger ghost onClick={() => { AppliedSuccess(d.user.email, d.job.id) }} disabled>
                                        Người này bạn đã tuyển
                                    </Button>
                                }


                            </div>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default ViewListApply