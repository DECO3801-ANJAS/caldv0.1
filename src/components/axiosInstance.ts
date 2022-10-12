import axios from "axios";

export const axiosFormData = axios.create({
    headers: {
        'Accept': "application/json, text/plain, */*",
        'Content-Type': "application/json"
    }
})