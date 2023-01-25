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

export const modifyBook = async() => {
    const response = axios.delete("");
}

export const deleteBook = (data) => {
    const response = axios.patch("",data);
}

