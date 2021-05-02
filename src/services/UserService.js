import axios from 'axios';

const apiUserUrl = `${process.env.REACT_APP_API_URL}api/users`

export default {

    loginUser: async (userData) => {
        try {
            const response = await axios.post(apiUserUrl + '/login', userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    registerUser: async (userData) => {

        try {
            const response = await axios.post(apiUserUrl + '/register', userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}