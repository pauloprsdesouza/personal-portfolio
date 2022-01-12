import axios from "axios";
import {
    getToken
} from "../services/Auth";

const api = axios.create({
    //baseURL: "http://localhost:5000",
    baseURL: "https://nudivlc2q9.execute-api.us-east-1.amazonaws.com/dev",

    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
});

const apiGit = axios.create({
    baseURL: "https://api.github.com/users/pauloprsdesouza",

    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default (
    api,
    apiGit
);