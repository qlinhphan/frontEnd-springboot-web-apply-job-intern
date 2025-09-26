import axios from "axios"

const LoginApp = async (email: string, password: string) => {
    const data = {
        "email": email,
        "password": password
    }

    const rs = await axios.post('http://localhost:8017/login', data)
    return rs
}

const logoutApp = async (accessToken: string) => {
    const rs = await axios.post(`http://localhost:8017/logout-s`, null, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export { LoginApp, logoutApp }