import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

import { ContactContainer, FormResult, FormWrapper } from './Contact.style';
import { Title } from '../../globalStyles';

const Contact = () => {
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bcv5mnh',
        'template_hao3hok',
        e.target,
        'user_hHW0LcLPtW1jc6bPsAot0'
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    e.target.reset();
    setResult(true);

    setTimeout(() => {
      setResult(false);
    }, 5000);
  };

  return (
    <ContactContainer id='contact'>
      <Title data-aos='flip-left'>Contact Me</Title>

      {result ? (
        <FormResult>
          <p>
            Your message has been successfully sent! I will contact you soon.
          </p>
        </FormResult>
      ) : null}

      <FormWrapper>
        <MDBContainer data-aos='fade-down'>
          <MDBRow className='d-flex justify-content-center align-items-center'>
            <MDBCol md='6'>
              <form onSubmit={sendEmail}>
                <p className='h4 text-center mb-4'>Write to me</p>
                <label htmlFor='defaultFormContactNameEx' className='grey-text'>
                  Your name
                </label>
                <input
                  type='text'
                  id='defaultFormContactNameEx'
                  className='form-control'
                  name='name'
                  placeholder='Your Name'
                />
                <br />
                <label
                  htmlFor='defaultFormContactEmailEx'
                  className='grey-text'
                >
                  Your email
                </label>
                <input
                  type='email'
                  id='defaultFormContactEmailEx'
                  className='form-control'
                  name='email'
                  placeholder='Your Email'
                />
                <br />
                <label
                  htmlFor='defaultFormContactMessageEx'
                  className='grey-text'
                >
                  Your message
                </label>
                <textarea
                  type='text'
                  id='defaultFormContactMessageEx'
                  className='form-control'
                  rows='3'
                  name='message'
                  placeholder='Your Message'
                />
                <div className='text-center mt-4'>
                  <MDBBtn color='success' outline type='submit'>
                    Send
                    <MDBIcon far icon='paper-plane' className='ml-2' />
                  </MDBBtn>
                  <p>
                    Or Contact Me on{' '}
                    <a
                      href='https://www.linkedin.com/in/yassine-nejmi/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: '#04c37f' }}
                    >
                      Linkedin <MDBIcon fab icon='linkedin' />
                    </a>
                  </p>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </FormWrapper>
    </ContactContainer>
  );
};

export default Contact;
