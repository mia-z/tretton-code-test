import axios, { AxiosInstance } from "axios";
import { SECRET_API_KEY } from "$env/static/private";

const client: AxiosInstance = axios.create({
    headers: {
        "Authorization": SECRET_API_KEY 
    }
});

export {
    client
}