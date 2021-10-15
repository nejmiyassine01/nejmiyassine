import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as Io from 'react-icons/io';

const ScrollTop = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  transition: all 0.3s linear;

  svg {
    font-size: 50px;
    color: #04c37f;
  }
`;

const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) {
        setShow(true);
      }
    } else {
      if (show) {
        setShow(false);
      }
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  const handleClick = () => {
    window['scrollTo']({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {show && (
        <ScrollTop onClick={handleClick}>
          <Io.IoIosArrowDropupCircle />
        </ScrollTop>
      )}
    </>
  );
};

export default Scroll;
