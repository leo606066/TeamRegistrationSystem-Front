import axios from "axios";

const request = (config: object) => {
    const instance = axios.create({
        timeout: 1000,
    });

    const token = localStorage.getItem("token");

    if (token) {
        instance.defaults.headers.common["Authorization"] = `${token}`;
    }

    return instance(config);
};

export default request;