import React, { useState , useEffect } from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget";
import MenuBurger from "./MenuBurger";
import { getCategories } from "../services/getCategories";
import { Link } from "react-router-dom";
import logo from '../assets/HASBULLA.png'

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleClick = () => {
    //Invierte el boolean
    setClicked(!clicked);
  };

  useEffect(() => {
    getCategories()
    .then((datos) => {
      setCategories(datos);
    }).catch((err) => {
      alert(err.message)
    });
  
  }, [])
  

  return (
    <>
      <NavContainer>
        <div className="logo">
          <figure>
            <img src={logo} alt="logo"></img>
          </figure>
        </div>
        <div className={`links ${clicked ? "active" : ""}`}>
          {
            categories.map((c,i) => {
              return <Link key={i} onClick={handleClick} to={`category/${c}`}>{c}</Link>
            })
          }
        </div>
        <div className="cart-container">
          <CartWidget/>
        </div>
        <div className="burguer">
          <MenuBurger clicked={clicked} handleClick={handleClick} />
          <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
        </div>
        
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  padding: 0.4rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .logo{
    flex:1;
    display: flex;
    justify-content: center;
    figure{
      margin: 0;
    }
    img{
      width: 5rem;
    }
  }
  .cart-container{
    flex: 1;
  }
  a {
    color: white;
    text-decoration: none;
    text-transform: capitalize;
    margin-right: 1rem;
  }
  .links {
    flex: 3;
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links .active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    flex: 1;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  @media (max-width: 768px){
    background-color: #222;
    position: absolute;
    top: -2000px;
    left: -2000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.6s ease;
    &.active {
      border-radius: 0 0 80% 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;