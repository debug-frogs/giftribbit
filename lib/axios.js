import axios from 'axios';

const apiClient = axios.create({
    baseURL: typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''
});

export default apiClient;
