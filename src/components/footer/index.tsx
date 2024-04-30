import React from 'react';
import "./Footer.scss"

interface FooterProps {
  copyrightText: string;
}

const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer className="footer">
      <p>{copyrightText}</p>
    </footer>
  );
};

export default Footer;
