import axios from "axios"

const createJobCom = async (nameJob: string, descriptionJob: string, requireJob: string, benefitJob: string, limitPeopleForJob: number,

    accessToken: string
) => {
    const data = {
        nameJob: nameJob,
        descriptionJob: descriptionJob,
        requireJob: requireJob,
        benefitJob: benefitJob,
        limitPeopleForJob: limitPeopleForJob,
    }

    const rs = await axios.post('http://localhost:8017/manager-add-job-company', data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
    return rs
}

const findAllHasPageJC = async (current: number, limit: number, accessToken: string) => {
    const rs = await axios.get(`http://localhost:8017/findAll-jc-haspage?current=${current}&limit=${limit}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
    return rs
}

const findByIdJC = async (id: number, accessToken: string) => {
    const rs = await axios.get(`http://localhost:8017/find-jc-by-id/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
    return rs;
}

const deleteJCByJob = async (idJob: number, accessToken: string) => {
    const rs = await axios.delete(`http://localhost:8017/jobs-comp/del/${idJob}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
    return rs
}

export { createJobCom, findAllHasPageJC, findByIdJC, deleteJCByJob }