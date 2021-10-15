import styled from 'styled-components';

export const PortfolioSection = styled.section``;

export const PortfolioTitles = styled.div`
  h4 {
    margin-top: 10px;
    text-transform: uppercase;
    color: #04c37f;
    text-align: center;
  }
`;

export const PortfolioContainer = styled.div`
  padding: 50px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PortfolioWrapper = styled.div`
  padding: 10px;

  p {
    text-align: center;
    font-size: 20px;
  }

  img {
    border: 3px solid #fff;
    border-radius: 5px;
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 10px;
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const PortfolioButtons = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;

    button {
      margin: 5px 0;
    }
  }
`;
