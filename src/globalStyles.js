import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto Condensed', sans-serif;
  background-color: #111;
  color: #fff;
}

html {
  scroll-behavior: smooth;
}
`;

const Wrapper = styled.main`
  width: 85%;
  margin: 0 auto;

  @media (max-width: 991px) {
    width: 90%;
  }

  @media (max-width: 667px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  color: #ccc;
  position: relative;
  text-align: center;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 55%;
    height: 1px;
    width: 40%;
    background-color: #fff;

    @media (max-width: 991px) {
      width: 35%;
    }

    @media (max-width: 667px) {
      display: none;
    }
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

const Button = styled.button`
  margin: 20px 0;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  border: 2px solid #04c37f;
  background-color: transparent;
  color: #04c37f;
  font-size: 16px;
  text-transform: uppercase;
  transform: scale(1);
  transition: all 0.3s linear;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
    background-color: #04c37f;
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0px 0px 15px 5px rgba(4, 195, 127, 0.5);
  }

  svg {
    font-size: 22px;
    margin: 0 0 2px 5px;
  }
`;

export { GlobalStyle, Wrapper, Title, Button };
