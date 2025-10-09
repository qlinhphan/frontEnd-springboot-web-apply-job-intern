import axios from "axios";

const createAUser = async (email: string, name: string, address: string, password: string, roleId: string) => {
    const data = new FormData()
    data.append("email", email)
    data.append("name", name)
    data.append("address", address)
    data.append("password", password)
    data.append("roleId", roleId)
    const res = await axios.post('http://localhost:8017/users', data);
    return res
}

const findUserById = async (id: string, accessToken: string) => {
    const res = await axios.get(`http://localhost:8017/user/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return res
}
const findUserByEmailToken = async (email: string, accessToken: string) => {
    const res = await axios.get(`http://localhost:8017/user/find-by-email`, {
        params: { email },
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return res
}

const UpdateUserToken = async (id: string, address: string, name: string, email: string, roleId: string, password: string, newPassword: string, accessToken: string) => {
    const data = new FormData()
    data.append('id', id)
    data.append("address", address)
    data.append("name", name)
    data.append("email", email)
    data.append("roleId", roleId)
    data.append("password", password)
    data.append("newPassword", newPassword)
    const res = await axios.put(`http://localhost:8017/user/update`, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return res
}

const updateAUser = async (idUser: string, address: string, name: string, email: string, roleId: string, accessToken: string) => {
    const data = new FormData()
    data.append("id", idUser)
    data.append("email", email)
    data.append("name", name)
    data.append("address", address)
    data.append("roleId", roleId)

    const res = await axios.put('http://localhost:8017/user/update', data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return res
}

const deleteAUser = async (id: string, accessToken: string) => {
    const rs = await axios.delete(`http://localhost:8017/user/del/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
    return rs
}

export { createAUser, findUserById, updateAUser, deleteAUser, findUserByEmailToken, UpdateUserToken }