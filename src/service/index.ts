// Services
// This folder contains modules that handle interactions with external APIs, data fetching, and other asynchronous 

import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export const axiosPublicInstance = axios.create()
export const axiosPrivateInstance = axios.create()