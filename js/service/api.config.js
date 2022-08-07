import { DATABASE_URL } from "../constants.js";


export const Api=axios.create({
baseURL:DATABASE_URL,
})