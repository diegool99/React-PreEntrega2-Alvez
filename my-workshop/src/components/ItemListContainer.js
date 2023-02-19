import React from 'react'
import { useEffect, useState } from "react";
import styled from "styled-components";
import ItemList from './ItemList';
import { getProducts } from "../services/getProducts";
import Loading from './Loading';
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {

  const[products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      getProducts(name)
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        alert(error.message);
        setProducts([])
      });
    },2000);
    

  },[name])

  return (
    <>
      <ContainerItems>
      <h1>{greeting}</h1>
        <div className='container-items'>
          {
          (loading) ? <Loading/> :
          products.map(p => {
            return <ItemList product={p} key={`ItemList${p.id}`}></ItemList>
          })}
        </div>
      </ContainerItems>
    </>
    
  )
}

export default ItemListContainer

const ContainerItems = styled.div`
  .container-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 768px){
      display: block;
    }

    margin: 1rem;
  }

  h1 {
    text-align: center;
  }
`;