import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
})

export const get = async(url, setData) => {
    const response = await api.get(url);
    setData(response.data)
}