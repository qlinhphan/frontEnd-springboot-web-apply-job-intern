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

const userRegisterJobForThem = async (idJob: string, accessToken: string) => {
    const data = new FormData()
    data.append("idJob", idJob);
    const rs = await axios.post(`http://localhost:8017/user-register-job`, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })

    return rs
}

const userViewUserJobTheir = async (current: number, limit: number, accessToken: string) => {
    const rs = await axios.get(`http://localhost:8017/user-view-list-registered?current=${current}&limit=${limit}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })

    return rs
}

const deleteUserJobForUser = async (id: number, accessToken: string) => {
    const rs = await axios.delete(`http://localhost:8017/del-user-job-by-id/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })

    return rs
}

export { findAllForUser, searchConditionJobForUser, userRegisterJobForThem, userViewUserJobTheir, deleteUserJobForUser }