
import { searchConditionJobForUser } from "@/apiService/user.page.api";
import { Checkbox, Flex, Input, Radio, Space } from "antd";
import { GetProp } from "antd/lib";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const { Search } = Input;
// setCurrent={setCurrent} setLimit={setLimit} setTotal={setTotal} setAllJobCom={setAllJobCom}
interface Iprops {
    setCurrent: any, setLimit: any, setTotal: any, setAllJobCom: any
}
const SearchConditionJob: React.FC<Iprops> = ({ setCurrent, setLimit, setTotal, setAllJobCom }) => {

    const [money, setMoney] = useState("")
    const [typeJob, setTypeJob] = useState("")
    const [toSearch, setToSearch] = useState("")
    const accessToken = useSelector((state: any) => state.user.info.accessToken)

    const options = [
        { label: 'Dưới hoặc bằng 1500$', value: 'be-hon-bang-1500' },
        { label: 'Lớn hơn 1500$ và bé hơn 3000$', value: 'lon-hon-1500-va-be-hon-3000' },
        { label: 'Lớn hơn 3000$', value: 'lon-hon-bang-3000' },
    ];
    const options2 = [
        { label: 'Full time', value: 'fulltime' },
        { label: 'Part time', value: 'parttime' }
    ];

    const onSearch = (value: any, _e: any, info: any) => {
        console.log("Check value: ", value);
        setToSearch(value)
    }

    const ToDoSearch = async () => {
        const rs = await searchConditionJobForUser(money, typeJob, toSearch, "1", "10", accessToken)
        setCurrent(rs.data.data.current)
        setLimit(rs.data.data.limit)
        setTotal(rs.data.data.sumObj)
        setAllJobCom(rs.data.data.data)
    }

    useEffect(() => {
        console.log("money: ", money)
        console.log("typeJob: ", typeJob)
        console.log("toSearch: ", toSearch)

        ToDoSearch()


    }, [money, typeJob, toSearch])
    return (
        <>
            <div>
                <b>--- Mức lương</b>
                <Flex vertical gap="middle">
                    <Radio.Group block options={options} onChange={(event) => { setMoney(event?.target.value) }} />
                </Flex>
            </div>
            <div style={{ marginTop: '17px' }}>
                <b>--- Hình thức làm việc</b>
                <Flex vertical gap="middle">
                    <Radio.Group block options={options2} onChange={(event) => { setTypeJob(event?.target.value) }} />
                </Flex>
            </div>
            <div style={{ marginTop: '17px' }}>
                <b>--- Tìm công việc</b>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </div>
        </>
    )
}

export default SearchConditionJob