import axios from 'axios'

const URL = 'http://localhost:'//port번호 입력

export const videoFilterAPI = async (videoNum) => {
    try{
        const response = await axios.post(`${URL}/api/filter`, {
            id : videoNum
        })
        return response;
    } catch(error) {
        return {error}
    }
}

export const loadVideoAPI = async ({}) => {
    try{
        const response = await axios.get(`${URL}/api/load`);
        return response;
    } catch(error) {
        return {error}
    }
}
