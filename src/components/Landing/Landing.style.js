import styled from 'styled-components';

export const LandingItems = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h4 {
    text-transform: uppercase;
    color: #ccc;
    margin: 20px 0;
  }

  h2 {
    line-height: 50px;
    font-size: 40px;

    span {
      color: #04c37f;
    }
  }
`;
