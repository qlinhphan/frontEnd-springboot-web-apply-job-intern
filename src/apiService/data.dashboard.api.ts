import axios from "axios"

const dataForDash = async (accessToken: string) => {
    const rs = await axios.get('http://localhost:8017/dash-view', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })

    return rs
}

export { dataForDash }