import axios from 'axios';

export const getRandomUsers = async (page, resultsCount, gender, nation) => {
    const { data } = await axios
        .get(`https://randomuser.me/api/?page=${page}&results=${resultsCount}&gender=${gender}&nat=${nation}`);
    return data;
};
