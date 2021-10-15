import React, { useEffect } from 'react';
import AOS from 'aos';

import { GlobalStyle, Wrapper } from './globalStyles';

import Scroll from './components/scroll';
import Navbar from './components/Navbar/Navbar.component';
import Landing from './components/Landing/Landing.component';
import About from './components/About/About.component';
import Portfolio from './components/Portfolio/Portfolio.component';
import Contact from './components/Contact/Contact.component';
import Footer from './components/Footer/Footer.component';

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper>
        <Scroll showBelow={250} />
        <GlobalStyle />
        <Landing />
        <About />
        <Portfolio />
        <Contact />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
