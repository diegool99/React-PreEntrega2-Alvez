export const APIgetProducts = (path) => {
    return (
        (path) ?  `https://fakestoreapi.com/products/category/${path}` : `https://fakestoreapi.com/products`
    );
}

export const APIgetCategories = () => 'https://fakestoreapi.com/products/categories';

export const APIgetProduct = (id) => `https://fakestoreapi.com/products/${id}`;