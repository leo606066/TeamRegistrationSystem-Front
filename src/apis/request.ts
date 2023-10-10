import axios from "axios";

const request = (config: object) => {
    const instance = axios.create({
        timeout: 1000,
    });


    instance.defaults.headers.common["Authorization"] = `${localStorage.getItem("token")!}`;

    return instance(config);
};

export default request;