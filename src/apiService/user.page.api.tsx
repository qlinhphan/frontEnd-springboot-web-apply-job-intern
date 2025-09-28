import axios from "axios"

const findAllForUser = async (current: string, limit: string, accessToken: string) => {
    const rs = await axios.get(`http://localhost:8017/findAll-JC-hasPage-forUser?current=${current}&limit=${limit}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })

    return rs
}

const searchConditionJobForUser = async (money: string, typeJob: string, nameJob: string, current: string, limit: string, accessToken: string) => {
    const rs = await axios.get(`http://localhost:8017/range-salary?money=${money}&typeJob=${typeJob}&nameJob=${nameJob}&current=${current}&limit=${limit}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })

    return rs
}

export { findAllForUser, searchConditionJobForUser }