import React from 'react';
// import './CertificateCard.css'; // Create a separate CSS file for CertificateCard component

const CertificateCard = ({ logo, imgSrc, link }) => {
  return (
    <div className="CerMain">
      <div className="CerLogo">{logo}</div>

      <div className="CertificateImg">
        <img src={imgSrc} alt={`${logo} Certificate`} />
      </div>

      <div className="CerOpenLink">
        <a href={link} target="_blank" rel="noopener noreferrer">
          Open
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;
