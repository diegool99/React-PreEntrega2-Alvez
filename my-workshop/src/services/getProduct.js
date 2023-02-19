import { APIgetProduct } from "../features/API";

export const getProduct = async (id) => {
    const URL = APIgetProduct(id);
    return await fetch(URL)
    .then(res => res.json())
    .then(data => {
        return data;
    }).catch(error => {
        return error;
    })
}