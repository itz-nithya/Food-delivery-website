import React, { useState } from 'react';
import img from "../assets/images/cardimg-1.webp"

const OrderOnline = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePage = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img
        src={img}
        alt="Toggle Page"
        onClick={togglePage}
        style={{ cursor: 'pointer', width: '100px', height: '100px' }}
      />
      
      {isOpen && (
        <div className="modal">
          <h2>Your Page Content</h2>
          <p>This is where you can place your content.</p>
          <button onClick={togglePage}>Close</button>
        </div>
      )}
    </div>
  );
};

export default OrderOnline;
