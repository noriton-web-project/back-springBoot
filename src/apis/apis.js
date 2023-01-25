import axios from "axios"

export const getList = async () => {
    const response = await axios.get(``);

    return response.data;
}

export const getBook = async (id) => {
    const response = await axios.get(``);
    
    return response.data;
}

export const addBook = (data) => {
    const response = axios.post("", data);

    return response;
}

export const modifyBook = async(data) => {
    const response = axios.patch("", data);
}

export const deleteBook = (id) => {
    const response = axios.delete("");
}

