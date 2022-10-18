import api from "./api";

export default {
    login(login) {
        return api.post('login', login);
    },
    logout() {
        return api.get(`logout`);
    }
};
