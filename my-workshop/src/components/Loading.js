import React from 'react'
import styled from "styled-components";

const Loading = () => {
  return (
    <>
        <Load>
            <div className='square-wrap'>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>  
        </Load>
    </>
  )
}

export default Loading;

const Load = styled.div`
.square-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -113px;
  }
  .square {
    position: absolute;
    background-color: black;
    width: 3px;
    height: 62px;
    margin: 0 3px;
    animation: sliding 3s ease infinite;
  }
  
  .square:nth-child(1n) {
    animation-delay: 0.3s;
  }
  .square:nth-child(2n) {
    animation-delay: 1s;
  }
  .square:nth-child(3n) {
    animation-delay: 0.7s;
  }
  .square:nth-child(5n) {
    animation-delay: 1.3s;
  }
  .square:nth-child(7n) {
    animation-delay: 1.5s;
  }
  .square:nth-child(11n) {
    animation-delay: 1.7s;
  }
  .square:nth-child(13n) {
    animation-delay: 2s;
  }
  .square:nth-child(17n) {
    animation-delay: 2.3s;
  }
  .square:nth-child(19n) {
    animation-delay: 2.5s;
  }
  .square:nth-child(23n) {
    animation-delay: 2.7s;
  }
  .square:nth-child(29n) {
    animation-delay: 3s;
  }
  
  @keyframes sliding {
    0%,
    100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(225px, 0);
    }
  }
  
`;