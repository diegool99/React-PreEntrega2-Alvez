import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

function CartWidget() {
  return (
    <Cart>
      <div class="icon-section">
        <div class="cart-wrapper">
          <div class="cart">
            <Icon icon="ion:cart" color="white" />
          </div>
          <div class="cart-badge">
            <span id="cart-count">3</span>
          </div>
          <div class="box" id="box">
            <Icon icon="ph:cube-thin" color="white" />
          </div>
        </div>
      </div>
    </Cart>
  );
}

export default CartWidget;

const Cart = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  :root {
    --font: "Poppins", sans-serif;
    --bg-color: #e8e8e8;
    --card-color: #f5f5f5;
    --primary-color: #6085f7;
    --primary-contrast: #ffffff;
    --warning-color: #f86666;
    --warning-contrast: #ffffff;
  }

  .card-wrapper {
    width: 380px;
    padding: 30px;
    border: 10px;
    border-radius: 20px;
    background: var(--card-color);
    box-shadow: 0 0 20px 1px rgba(5, 5, 5, 0.1);
  }

  .icon-section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    .cart-wrapper {
      position: relative;
      width: 50px;
      height: 50px;
      .cart {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        Icon {
          width: 100%;
          height: 100%;
        }
      }
      .cart-badge {
        position: absolute;
        top: -10px;
        right: -15px;
        width: 28px;
        height: 28px;
        padding: 5px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--primary-color);
        color: var(--primary-contrast);
        font-family: var(--font);
      }
      .box {
        position: absolute;
        top: 50%;
        left: -50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        width: 20px;
        height: 20px;
        Icon {
          width: 100%;
          height: 100%;
        }
        @keyframes add-to-cart-animation {
          0% {
            top: 20%;
            left: -30%;
            opacity: 0;
          }
          25% {
            top: -20%;
            left: 50%;
            opacity: 1;
          }
          50% {
            top: 0%;
            left: 70%;
          }
          75% {
            top: 35%;
            left: 50%;
          }
          100% {
            top: 35%;
            left: 50%;
            opacity: 0;
          }
        }
        &.add-box {
          animation: add-to-cart-animation 1s ease-in-out;
        }
        @keyframes remove-from-cart-animation {
          0% {
            top: 35%;
            left: 50%;
            opacity: 0;
          }
          25% {
            top: 35%;
            left: 50%;
          }
          50% {
            top: 0%;
            left: 70%;
            opacity: 1;
          }
          75% {
            top: -20%;
            left: 50%;
            opacity: 1;
          }
          100% {
            top: 20%;
            left: -30%;
            opacity: 0;
          }
        }
        &.remove-box {
          animation: remove-from-cart-animation 1s ease-in-out;
        }
      }
    }
  }
`;
