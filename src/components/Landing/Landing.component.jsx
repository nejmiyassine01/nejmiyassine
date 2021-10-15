import React from 'react';
import { Button } from '../../globalStyles';
import { LandingItems } from './Landing.style';

const Landing = () => {
  return (
    <LandingItems id='home'>
      <h4 data-aos='fade-right'>Welcome To My World</h4>
      <h2 data-aos='fade-left'>
        Hi, I'm <span>Yassine Nejmi</span>
        <br />a Front End Focused.
        <br />
        and Full Stack Experienced.
      </h2>
      <a href='#about' data-aos='fade-down'>
        <Button type='button'>About Me</Button>
      </a>
    </LandingItems>
  );
};

export default Landing;
