import React from 'react';

function Header(){

  const headerStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '30vh',
    backgroundColor: '#7FBC76',
    width: '100%',
    color: '#f5f5f5'
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <div className="navigation">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Partners</a>
          <a href="#">Products</a>
        </div>
        <div className="brand-section">
          <h1>Earth<span className="merch">Merch</span></h1>
          <div className="mission-statement">
            <p>We drive transformative change for people and planet.</p>
            <p>We support local artists and small makers who use natural, high-quality materials.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;