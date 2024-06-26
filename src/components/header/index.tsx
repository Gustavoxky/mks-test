import React, { ReactNode } from 'react';
import Link from 'next/link';
import './Header.scss';

interface HeaderProps {
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <span><p>MKS </p> <p>Sistemas</p></span>
        </Link>
      </div>
      {children} 
    </header>
  );
};

export default Header;
