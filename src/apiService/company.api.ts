import axios from "axios";

const findAllCompPagi = async (limit: string, current: string) => {
    const res = await axios.get(`http://localhost:8017/company/hasPage?limit=${limit}&current=${current}`);
    return res
}

const createACompany = async (name: string, address: string, leader: string, size: string) => {
    const data = {
        "name": name,
        "address": address,
        "leader": leader,
        "size": size
    }

    const res = await axios.post('http://localhost:8017/company', data)
    return res
}

const findCompanyById = async (id: string) => {
    const rs = await axios.get(`http://localhost:8017/company/${id}`)
    return rs;
}

const updateCompanyById = async (id: string, name: string, address: string, leader: string, size: string) => {
    const data = {
        "id": id,
        "name": name,
        "address": address,
        "leader": leader,
        "size": size
    }
    const rs = await axios.put('http://localhost:8017/company/update', data)
    return rs;
}

const deleteCompany = async (id: string) => {
    const rs = await axios.delete(`http://localhost:8017/company/del/${id}`)
    return rs;
}

export { findAllCompPagi, createACompany, findCompanyById, updateCompanyById, deleteCompany }