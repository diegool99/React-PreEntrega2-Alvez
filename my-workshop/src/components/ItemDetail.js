import React from 'react'
import styled from "styled-components";

const ItemDetail = ({product}) => {
  return (
    <ContenedorProducto>
            <div className='img-product'>
                <figure>
                    <img src={product.image} alt=''/>
                </figure>
            </div>
            <div className='info-product'>
                <h2 className="title">{product.title}</h2>
                <p className='price'>USD {product.price}</p>
                <p className="description">{product.description}</p>
                <button>Añadir al carrito</button>
            </div>
    </ContenedorProducto>
  )
}

export default ItemDetail;


const ContenedorProducto = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3rem;
    padding: 3rem;

    @media (max-width: 768px) {
        flex-direction: column;
        margin: 0.1rem;
        padding: 1rem;
    }

    .img-product {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 0.1rem solid black;

        @media (max-width: 768px) {
            border-right: none;
            border-bottom: 0.1rem solid black;
        }

        img {
            width: 30rem;
    
            @media (max-width: 768px) {
                width: 10rem;
            }
        }
    }
    
    .info-product {
        flex: 1;
        padding: 1rem 3rem;
    
        @media (max-width: 768px) {
            padding: 0.3rem 1rem;
            margin: 1rem;
        }
    
        line-height: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .price {
        font-size: 1rem;
        font-weight: 900;
    }

    .info-product button {
        height: 3rem;
        border: 0.1rem solid black;
        background: none;
        color: black;
        padding: 15px 10px;
        cursor: pointer;
    }
`;