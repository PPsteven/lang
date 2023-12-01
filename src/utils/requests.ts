import axios from "axios"
import { log as debugLog, api} from "."

// Import axios module for HTTP requests and log function from the current directory index file.
const instance = axios.create({
    // baseURL: api + "/api",
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
    withCredentials: false
})

// Add request interceptors to the Axios instance.
instance.interceptors.request.use(
    (config) => {
        // This function is called before the request is sent. You can perform actions here.
        return config // Return the modified config to proceed with the request.
    },
    (error) => {
        // do something before request is send
        console.log("Error:" + error.message) // for debug
        return Promise.reject(error)
    }
)

// Add request interceptors to the Axios instance.
instance.interceptors.response.use(
    (response) => {
        const resp = response.data
        debugLog(resp)
        return resp
    },
    (error) => {
        console.log("Error:" + error.message) // for debug
        return {
            code: error.response.status,
            message: error.message,
        }
    }
)

instance.defaults.headers.common["Authorization"] = 
    localStorage.getItem("token") || ""

export {instance as r}