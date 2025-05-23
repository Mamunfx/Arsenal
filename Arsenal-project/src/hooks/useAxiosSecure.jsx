import axios from 'axios';

const useAxiosSecure = () => {
 const  axiosInstance =  axios.create({
        baseURL: 'http://localhost:3000', 
        withCredentials: true,
    });

    return axiosInstance;
};

export default useAxiosSecure;
