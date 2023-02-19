import { APIgetCategories } from "../features/API";

export const getCategories = async () => {
    const URL = APIgetCategories();
    return await fetch(URL)
    .then(res => res.json())
    .then(data => {
        return data;
    }).catch(error => {
        return error;
    })
}