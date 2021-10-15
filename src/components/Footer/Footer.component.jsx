import React from 'react';
import { MDBFooter, MDBIcon } from 'mdbreact';

const Footer = () => {
  return (
    <MDBFooter>
      <div
        className='text-center p-3'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        Made with <MDBIcon fas icon='heart' className='text-danger' /> &copy;{' '}
        {new Date().getFullYear()} Copyright:{' '}
        <a
          className='text-light'
          href='https://www.linkedin.com/in/yassine-nejmi/'
          target='_blank'
          rel='noopener noreferrer'
        >
          NEJMI Yassine
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
