import React from 'react';
import ProjectsData from './ProjectsData';

import {
  PortfolioSection,
  PortfolioTitles,
  PortfolioContainer,
  PortfolioWrapper,
  PortfolioButtons,
} from './Portfolio.style';
import { Title, Button } from '../../globalStyles';

import * as Ri from 'react-icons/ri';
import * as Ai from 'react-icons/ai';

const Portfolio = () => {
  return (
    <PortfolioSection id='portfolio'>
      <PortfolioTitles data-aos='flip-left'>
        <Title>Portfolio</Title>
        <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
      </PortfolioTitles>

      <PortfolioContainer>
        {ProjectsData.map(({ image, name, github, preview }, i) => (
          <PortfolioWrapper data-aos='zoom-in' key={i}>
            <img src={image} alt='project' />
            <p>{name}</p>
            <PortfolioButtons>
              <a href={preview} target='_blank' rel='noopener noreferrer'>
                <Button type='button'>
                  Preview <Ri.RiExternalLinkLine />
                </Button>
              </a>
              <a href={github} target='_blank' rel='noopener noreferrer'>
                <Button type='button'>
                  Github <Ai.AiFillGithub />
                </Button>
              </a>
            </PortfolioButtons>
          </PortfolioWrapper>
        ))}
      </PortfolioContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
