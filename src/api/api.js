import * as axios from "axios";

const instanse = axios.create({
    baseURL: 'http://frontend-candidate.dev.sdh.com.ua/v1/',
});

export const userListAPI = {
    async getUsers() {
        let response = await instanse.get('contact/');
        return response.data
    },
    async deleteUser(userId) {
        return await instanse.delete(`contact/${userId}`);
    },
    async addUser(userData) {
        return await instanse.post('contact/', {...userData});
    }
};

export const userProfileAPI = {
    async getUser(userId) {
        let response = await instanse.get(`contact/${userId}`);
        return response.data;
    },
    async editUserData(userData, userId) {
        return await instanse.put(`contact/${userId}`, {...userData});
    }
};