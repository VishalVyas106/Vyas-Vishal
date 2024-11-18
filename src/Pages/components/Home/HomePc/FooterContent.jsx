import React from 'react';
import GmailSection from './GmailSection';

const FooterContent = ({ copyGmail }) => (
  <div className="OneButtom">
    <div className="OneOne">
      <div className='OneOneSpan'>LeetCode & CodeChefa</div>
      <div className='OneTwoSpan'>300+ </div> <span>Problems</span>
      <div className="DsaTopic">
        <div className="DsaOne">Link-List</div>
        <div className="DsaTwo">Dynamic Prog.</div>
        <div className="DsaThree">Three</div>
        <div className="DsaFour">Four</div>
      </div>
    </div>
    
    <div className="OneTwo">
      <div className="OneTwoHead">
        <div className="VIcon">V</div>
        <div className="SIcon">
          <div className="TwiterIcon"></div>
          <div className="LinkDinIcon"></div>
        </div>
      </div>
      <div className="TEXTForOneTwo">
        Let's <br /> Connect And <br /> Build Together
      </div>
    </div>

    <GmailSection copyGmail={copyGmail} />
  </div>
);

export default FooterContent;
