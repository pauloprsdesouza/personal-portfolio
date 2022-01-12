import axios from "axios";

const apiGithub = axios.create({
    baseURL: "https://api.github.com/users/pauloprsdesouza",

    headers: {
        "Content-Type": "application/json"
    }
});


export default apiGithub;