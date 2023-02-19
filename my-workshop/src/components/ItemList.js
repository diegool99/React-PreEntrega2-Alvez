import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemList = ({product}) => {

  return (
    <ItemProduct>
        <div className='item'>
            <figure className='img-product'>
                <Link to={`/product/${product.id}`}><img src={product.image} alt={product.id}/></Link>
            </figure>
            <div className='info-product'>
                <h2>{product.title}</h2>
                <p className='price'>USD {product.price}</p>
                <button>Añadir al carrito</button>
            </div>
        </div>
    </ItemProduct>
  )
}

export default ItemList;

const ItemProduct = styled.div`
.item {
	border-radius: 10px;
    &:hover {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    &:hover img {
        transform: scale(1.2);
    }
}

.item figure {
    overflow: hidden;
}

.item img {
	width: 100%;
	height: 15rem;

    @media (max-width: 768px) {
	    height: 10rem;
    }

	object-fit: cover;
	border-radius: 10px 10px 0 0;
	transition: all 0.5s;
}

.info-product {
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
	border: none;
	background: none;
	background-color: #000;
	color: #fff;
	padding: 15px 10px;
	cursor: pointer;
}
`;