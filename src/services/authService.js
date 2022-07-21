import axios from "axios";

const API_URL = "http://51.195.148.112/api/admin";


const login = (email, password) => {
    return axios
        .post(API_URL + "/auth/login", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data.token));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const authService = {
    login,
    logout,
    getCurrentUser,
};

export default authService;
