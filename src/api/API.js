import axios from "axios";

const getCookie = function(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

const api = axios.create({
    baseURL: "http://localhost:5000",
    //baseURL: "https://nudivlc2q9.execute-api.us-east-1.amazonaws.com/dev",
    
    headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${getCookie("Token")}`,
        "Access-Control-Allow-Origin": "*",
    }
});

export {getCookie, api}