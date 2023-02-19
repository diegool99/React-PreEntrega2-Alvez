import { APIgetProducts } from "../features/API";

export const getProducts = async (path) => {
    const URL = APIgetProducts(path);
    return await fetch(URL)
    .then(res => res.json())
    .then(data => {
        return data;
    }).catch(error => {
        return error;
    })
}