// WhatsAppButton.js
import React from 'react';
import whatsappLogo from '../../assets/images/whatsapp.png';
import './WhatsAppButton.css'; // Import CSS file for styling

function WhatsAppButton() {
  return (
    <div className="whatsapp-button">
      <a href="https://wa.me/+918919090172" target="_blank">
        <img src={whatsappLogo} alt="WhatsApp" />
      </a>
    </div>
  );
}

export default WhatsAppButton;
