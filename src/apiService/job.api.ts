import axios from "axios"

const findAllJobHasPage = async (current: string, limit: string) => {
    const rs = await axios.get(`http://localhost:8017/jobs/haspage?current=${current}&limit=${limit}`)
    return rs
}

const createAJob = async (nameJob: string, description: string, jobRequire: string, benefit: string, quality: number) => {
    const data = {
        "nameJob": nameJob,
        "description": description,
        "jobRequire": jobRequire,
        "benefit": benefit,
        "limitPeopleForJob": quality
    }

    const rs = await axios.post('http://localhost:8017/jobs', data)
    return rs;
}

const findJobById = async (id: number) => {
    const rs = axios.get(`http://localhost:8017/jobs/${id}`)
    return rs;
}

const updateJobById = (id: number, nameJob: string, description: string, jobRequire: string, benefit: string, quality: number, accessToken: string) => {
    const data = {
        "id": id,
        "nameJob": nameJob,
        "description": description,
        "jobRequire": jobRequire,
        "benefit": benefit,
        "limitPeopleForJob": quality
    }
    const rs = axios.put(`http://localhost:8017/jobs/update`, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
    return rs
}

const deleteJobById = async (id: number, accessToken: string) => {
    const rs = await axios.delete(`http://localhost:8017/jobs/del/${id}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }

    )
    return rs
}

export { findAllJobHasPage, createAJob, findJobById, updateJobById, deleteJobById }