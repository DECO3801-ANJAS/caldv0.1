import axios from "axios";

// Axios instance for form submission
export const axiosFormData = axios.create({
    headers: {
        'Accept': "application/json, text/plain, */*",
        'Content-Type': "application/json"
    }
})