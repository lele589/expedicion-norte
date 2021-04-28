import axios from 'axios';
import lodash from 'lodash';

const apiPostUrl = `${process.env.REACT_APP_API_URL}api/posts`

export default {

    getPostList: async (limit, orderBy, order, category, page, onlyPublic) => {

        let url = ''
        if (limit) {
            url = `${apiPostUrl}?limit=${limit}`
        } else {
            url = apiPostUrl
        }
        
        if (orderBy) {
            const sign = limit ? '&' : '?'
            url = url + `${sign}orderBy=${orderBy}`
        }

        if (category) {
            const sign = limit || orderBy ? '&' : '?'
            url = url + `${sign}category=${category}`
        }

        if (page) {
            const sign = limit || orderBy || category ? '&' : '?'
            url = url + `${sign}page=${page}`
        }

        if (onlyPublic) {
            const sign = limit || orderBy || category || page ? '&' : '?'
            url = url + `${sign}onlyPublic=${onlyPublic}`
        }

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getPostById: async (idPost) => {

        const url = `${apiPostUrl}/${idPost}`

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    createPost: async (post) => {

        const url = apiPostUrl

        try {
            const response = await axios.post(url, post);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}