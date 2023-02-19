import React,  { useState , useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { getProduct } from "../services/getProduct";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getProduct(id)
            .then((data) => {
                setProduct(data);
                setLoading(false);
            }).catch((err) => {
                alert(err.message)
            });
        }, 2000);
        
    }, [id])
    


  return (
    <>
        {
            (loading) ? <Loading/> : <ItemDetail product={product}/>
        }
    </>
  )
}

export default ItemDetailContainer;
