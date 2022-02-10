import axios from 'axios';

export const getRandomUsers = async (page, resultsCount) => {
    const { data } = await axios.get(`https://randomuser.me/api/?page=${page}&results=${resultsCount}`);
    return data;
};
