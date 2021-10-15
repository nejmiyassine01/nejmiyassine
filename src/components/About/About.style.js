import styled from 'styled-components';

export const AboutContainer = styled.section`
  padding: 30px 0;

  @media (max-width: 667px) {
    padding: 10px 0;
  }
`;

export const AboutTitles = styled.div`
  margin-bottom: 20px;

  h4 {
    text-align: center;
    font-size: 20px;
    color: #04c37f;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;

  @media (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
`;

export const AboutSide = styled.div`
  width: 48%;

  p {
    line-height: 25px;
  }

  @media (max-width: 991px) {
    width: 100%;
    margin: 20px 0;
  }

  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
