import React, { useState } from 'react';
import './One.css';
import Navbar from './Navbar.jsx';
import GmailSection from './GmailSection.jsx';
import MainContent from './MainContent.jsx';
import FooterContent from './FooterContent.jsx';
import About from './About/About.jsx';

import IndexThree from './Three/indexThree.jsx';
import Follower from './Three/Followera.jsx';
import Footer from './Footer/Footer.jsx';
import Certificate from '../Certificate/Certificate.jsx';

const HomePc = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyGmail = () => {
    const gmail = "vyasVishal.Work@gmail.com";
    navigator.clipboard.writeText(gmail)
      .then(() => {
        setCopySuccess('Gmail copied to clipboard!');
      })
      .catch(err => {
        console.error("Failed to copy Gmail: ", err);
        setCopySuccess('Failed to copy Gmail.');
      });
  };

  return (
    <div className='One'>
      <Follower />

      <Navbar />
      <MainContent />
      <FooterContent copyGmail={copyGmail} />


      <About />
      <IndexThree />
      <Certificate />
      <Footer />
    </div>
  );
};

export default HomePc;
