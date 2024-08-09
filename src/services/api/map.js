import axios from 'axios';

const API_URL = 'https://seok2.duckdns.org/api';

export const fetchMapData = async () => {
    try {
        const response = await axios.get(`${API_URL}/map/find`);
        return response.data;
    } catch (error) {
        throw error;
    }
}