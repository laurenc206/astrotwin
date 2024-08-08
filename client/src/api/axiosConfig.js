import axios from 'axios';

export default axios.create({
    baseURL: `${process.env.React_app_BACKEND_URL}`
});