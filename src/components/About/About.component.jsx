import React from 'react';
import { MDBBtn } from 'mdbreact';
import {
  AboutContainer,
  AboutTitles,
  AboutWrapper,
  AboutSide,
} from './About.style';
import { Title } from '../../globalStyles';

const About = () => {
  return (
    <AboutContainer id='about'>
      <AboutTitles data-aos='fade-up-right'>
        <Title>About Me</Title>
        <h4>Who Am I</h4>
      </AboutTitles>

      <AboutWrapper>
        <AboutSide data-aos='fade-left'>
          <h4>Hello!</h4>
          <p>
            My name is Yassine Nejmi and I'm a passionate Frontend Web Developer
            using web technologies to build amazing products and focusing on
            solving problems for different niches and different industries using
            the power of technology.
            <br />I will love to hear from you. Whether it's a project, job
            opportunity, or just a chat. Feel free to contact me.
          </p>
        </AboutSide>

        <AboutSide data-aos='fade-right'>
          <MDBBtn color='success'>Html</MDBBtn>
          <MDBBtn color='success'>Css/Scss</MDBBtn>
          <MDBBtn color='success'>Bootstrap/TailwindCSS</MDBBtn>
          <MDBBtn color='success'>Javascript</MDBBtn>
          <MDBBtn color='success'>React</MDBBtn>
          <MDBBtn color='success'>Vue</MDBBtn>
          <MDBBtn color='success'>PHP/MySQL</MDBBtn>
          <MDBBtn color='success'>Git</MDBBtn>
        </AboutSide>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
